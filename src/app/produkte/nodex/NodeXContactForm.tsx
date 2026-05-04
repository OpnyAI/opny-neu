"use client";

import type React from "react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const interests = [
  "KI-Beratung",
  "KI-Training",
  "NodeX Demo",
  "Allgemeine Anfrage",
  "KI-Governance-Check",
  "Pilotprojekt besprechen",
] as const;

const companySizes = [
  "1-50 Mitarbeitende",
  "51-250 Mitarbeitende",
  "251-1.000 Mitarbeitende",
  "1.000+ Mitarbeitende",
] as const;

type Interest = (typeof interests)[number];

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
  interest: "NodeX Demo",
  message: "",
  privacy: false,
  website: "",
};

export default function NodeXContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [renderedAt, setRenderedAt] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  useEffect(() => {
    setRenderedAt(String(Date.now()));

    const handler = (event: Event) => {
      const interest = (event as CustomEvent<Interest>).detail;
      if (interests.includes(interest)) {
        setForm((current) => ({ ...current, interest }));
      }
    };

    window.addEventListener("nodex-interest-select", handler);
    return () => window.removeEventListener("nodex-interest-select", handler);
  }, []);

  const isSubmitting = status === "submitting";
  const successMessage = useMemo(
    () =>
      "Danke. Wir haben Ihre Anfrage erhalten und melden uns zeitnah mit einem konkreten Vorschlag für den nächsten Schritt.",
    [],
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/nodex-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, renderedAt }),
      });

      if (!response.ok) {
        throw new Error("request_failed");
      }

      setStatus("success");
      setForm({ ...initialState, interest: form.interest });
      setRenderedAt(String(Date.now()));
    } catch {
      setStatus("error");
      setError(
        "Ihre Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder nutzen Sie die E-Mail-Adresse unten.",
      );
    }
  }

  return (
    <div className="rounded-card border border-border-subtle-light/20 bg-white p-5 shadow-card-light sm:p-6">
      {status === "success" ? (
        <div
          className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-relaxed text-emerald-950"
          role="status"
        >
          {successMessage}
        </div>
      ) : null}

      <form className="mt-0 space-y-5" onSubmit={onSubmit} noValidate>
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
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              className="field-input"
            />
          </Field>

          <Field label="Unternehmen" htmlFor="company" required>
            <input
              id="company"
              name="company"
              type="text"
              required
              autoComplete="organization"
              value={form.company}
              onChange={(event) => update("company", event.target.value)}
              className="field-input"
            />
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
              onChange={(event) => update("interest", event.target.value as Interest)}
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

        <Field label="Nachricht optional" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1500}
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
            className="field-input resize-y"
            placeholder="Kurz zur Ausgangslage, vorhandenen Tools oder geplanten Use Cases."
          />
        </Field>

        <label className="flex items-start gap-3 text-sm leading-relaxed text-text-muted-light">
          <input
            type="checkbox"
            required
            checked={form.privacy}
            onChange={(event) => update("privacy", event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-border-subtle-light/40"
          />
          <span>
            Ich habe die{" "}
            <Link href="/datenschutz" className="font-semibold text-text-primary-light underline">
              Datenschutzhinweise
            </Link>{" "}
            gelesen und stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu.
          </span>
        </label>

        {status === "error" ? (
          <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          data-track-event="nodex_cta_click"
          data-track-interest={form.interest}
          className="inline-flex w-full items-center justify-center rounded-button bg-text-primary-light px-5 py-3 text-sm font-semibold text-text-primary-dark shadow-card-light transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-subtle-light/35 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
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
    <label htmlFor={htmlFor} className="block space-y-2 text-sm font-medium text-text-primary-light">
      <span>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
