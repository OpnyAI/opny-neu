"use client";

import type React from "react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  contactInterests,
  normalizeContactInterest,
} from "@/lib/contact-interest";

import { trackEvent, trackLead, productForInterest } from "@/lib/tracking";

export const interests = contactInterests;

const companySizes = [
  "1-50 Mitarbeitende",
  "51-250 Mitarbeitende",
  "251-1.000 Mitarbeitende",
  "1.000+ Mitarbeitende",
] as const;

export type Interest = (typeof interests)[number];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  companySize: string;
  interest: Interest;
  message: string;
  privacy: boolean;
  website: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  companySize: "",
  interest: "Allgemeine Anfrage",
  message: "",
  privacy: false,
  website: "",
};

export default function ContactForm({
  initialInterest,
}: {
  initialInterest?: string;
}) {
  const normalizedInterest = normalizeContactInterest(initialInterest ?? "");
  const selectedInterest = interests.includes(normalizedInterest as Interest)
    ? (normalizedInterest as Interest)
    : initialState.interest;
  const [form, setForm] = useState<FormState>(() => ({
    ...initialState,
    interest: selectedInterest,
  }));
  const startedRef = useRef(false);
  const submittingRef = useRef(false);
  const [renderedAt, setRenderedAt] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<"name" | "company", string>>
  >({});

  useEffect(() => {
    setRenderedAt(String(Date.now()));
  }, []);

  const successMessage = useMemo(
    () =>
      "Danke. Ihre Anfrage ist eingegangen. Wir melden uns mit einem passenden nächsten Schritt.",
    [],
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (key === "name" || key === "company")
      setFieldErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;
    setError("");
    const cleaned = {
      ...form,
      name: form.name.trim(),
      company: form.company.trim(),
      email: form.email.trim(),
    };
    const invalid: Partial<Record<"name" | "company", string>> = {};
    if (cleaned.name.length < 2)
      invalid.name =
        "Bitte geben Sie Ihren Namen mit mindestens zwei Zeichen ein.";
    if (cleaned.company.length < 2)
      invalid.company =
        "Bitte geben Sie Ihr Unternehmen mit mindestens zwei Zeichen ein.";
    setFieldErrors(invalid);
    const firstInvalid = invalid.name
      ? "name"
      : invalid.company
        ? "company"
        : null;
    if (firstInvalid) {
      trackEvent("form_validation_error", {
        form_id: "opny_contact",
        field_name: firstInvalid,
        error_type: "invalid",
      });
      setStatus("error");
      setError(invalid[firstInvalid]!);
      event.currentTarget
        .querySelector<HTMLInputElement>(`#${firstInvalid}`)
        ?.focus();
      return;
    }
    submittingRef.current = true;
    setStatus("submitting");

    try {
      const response = await fetch("/api/nodex-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...cleaned, renderedAt }),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        leadAccepted?: boolean;
      } | null;

      if (result?.error === "too_fast") {
        setStatus("error");
        setError(
          "Bitte warten Sie einen kurzen Moment und senden Sie Ihre Anfrage erneut.",
        );
        return;
      }
      if (!response.ok || result?.ok !== true) {
        throw new Error("request_failed");
      }

      if (result.leadAccepted === true) trackLead(form.interest);
      setStatus("success");
      setForm({ ...initialState, interest: form.interest });
      setRenderedAt(String(Date.now()));
    } catch {
      setStatus("error");
      setError(
        "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an info@opny.ai.",
      );
      trackEvent("form_submit_error", {
        form_id: "opny_contact",
        error_type: "request_failed",
      });
    } finally {
      submittingRef.current = false;
    }
  }

  return (
    <div className="rounded-card border border-border-subtle-light/20 bg-white p-5 shadow-card-light sm:p-6">
      {status === "success" ? (
        <div
          className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-relaxed text-emerald-950"
          role="status"
        >
          {successMessage}
        </div>
      ) : null}

      <form
        className="space-y-5"
        onSubmit={onSubmit}
        onChangeCapture={() => {
          if (!startedRef.current)
            startedRef.current = trackEvent("form_start", {
              form_id: "opny_contact",
              product: productForInterest(form.interest),
            });
        }}
        onInvalidCapture={(event) => {
          const name = (event.target as HTMLInputElement).name;
          if (
            ["name", "company", "email", "companySize", "privacy"].includes(
              name,
            )
          )
            trackEvent("form_validation_error", {
              form_id: "opny_contact",
              field_name: name as
                | "name"
                | "company"
                | "email"
                | "companySize"
                | "privacy",
              error_type: "invalid",
            });
        }}
      >
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(event) => update("website", event.target.value)}
          />
        </div>
        <input type="hidden" name="renderedAt" value={renderedAt} />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" htmlFor="name" required>
            <input
              id="name"
              name="name"
              minLength={2}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
              required
              autoComplete="name"
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              className="field-input"
            />
            {fieldErrors.name ? (
              <p id="name-error" className="mt-2 text-sm text-red-900">
                {fieldErrors.name}
              </p>
            ) : null}
          </Field>
          <Field label="Unternehmen" htmlFor="company" required>
            <input
              id="company"
              name="company"
              minLength={2}
              aria-invalid={Boolean(fieldErrors.company)}
              aria-describedby={
                fieldErrors.company ? "company-error" : undefined
              }
              required
              autoComplete="organization"
              value={form.company}
              onChange={(event) => update("company", event.target.value)}
              className="field-input"
            />
            {fieldErrors.company ? (
              <p id="company-error" className="mt-2 text-sm text-red-900">
                {fieldErrors.company}
              </p>
            ) : null}
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Geschäftliche E-Mail" htmlFor="email" required>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(event) => update("email", event.target.value)}
              className="field-input"
            />
          </Field>
          <Field label="Telefon optional" htmlFor="phone">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => update("phone", event.target.value)}
              className="field-input"
            />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Unternehmensgröße" htmlFor="companySize" required>
            <select
              id="companySize"
              name="companySize"
              required
              value={form.companySize}
              onChange={(event) => update("companySize", event.target.value)}
              className="field-input"
            >
              <option value="">Bitte auswählen</option>
              {companySizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Interesse" htmlFor="interest" required>
            <select
              id="interest"
              name="interest"
              required
              value={form.interest}
              onChange={(event) =>
                update("interest", event.target.value as Interest)
              }
              className="field-input"
            >
              {interests.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Ausgangslage optional" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={1500}
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
            className="field-input resize-y"
            placeholder={
              form.interest === "AuthenticTrust Demo"
                ? "Zum Beispiel: Unsere Dokumente und Nachweise liegen in mehreren Ordnern. Wir möchten aktuelle Fassungen, offene Punkte und Zuständigkeiten gemeinsam bearbeiten."
                : "Beschreiben Sie kurz Ihre Ausgangslage und den gewünschten nächsten Schritt."
            }
          />
        </Field>

        <label className="flex items-start gap-3 text-sm leading-relaxed text-text-muted-light">
          <input
            type="checkbox"
            name="privacy"
            required
            checked={form.privacy}
            onChange={(event) => update("privacy", event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-border-subtle-light/40"
          />
          <span>
            Ich habe die{" "}
            <Link
              href="/datenschutz"
              className="font-semibold text-text-primary-light underline"
            >
              Datenschutzhinweise
            </Link>{" "}
            gelesen und stimme der Verarbeitung zur Kontaktaufnahme zu.
          </span>
        </label>

        {status === "error" ? (
          <p
            className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900"
            role="alert"
          >
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="button button-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting"
            ? "Wird gesendet …"
            : form.interest === "AuthenticTrust Demo"
              ? "AuthenticTrust-Demo anfragen"
              : "Anfrage senden"}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block space-y-2 text-sm font-medium text-text-primary-light"
    >
      <span>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
