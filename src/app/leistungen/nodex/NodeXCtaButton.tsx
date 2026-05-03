"use client";

import type React from "react";
import Button from "@/components/ui/Button";

type Interest =
  | "NodeX Demo"
  | "KI-Governance-Check"
  | "Pilotprojekt besprechen"
  | "Allgemeine Anfrage";

type NodeXCtaButtonProps = {
  children: React.ReactNode;
  interest: Interest;
  eventName:
    | "nodex_cta_click"
    | "nodex_demo_request"
    | "nodex_governance_check_click";
  variant?: "primary" | "secondary";
  className?: string;
};

export default function NodeXCtaButton({
  children,
  interest,
  eventName,
  variant = "primary",
  className,
}: NodeXCtaButtonProps) {
  return (
    <Button
      type="button"
      theme="light"
      variant={variant}
      className={className}
      data-track-event={eventName}
      data-track-category="nodex_cta_click"
      data-track-interest={interest}
      onClick={() => {
        window.dispatchEvent(
          new CustomEvent("nodex-interest-select", { detail: interest }),
        );
        document
          .getElementById("nodex-contact")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", "#nodex-contact");
      }}
    >
      {children}
    </Button>
  );
}
