"use client";

import { useEffect, useRef } from "react";
import { flodeskEmbedHtml } from "@/lib/flodeskEmbed";

const successRedirectDelay = 1800;

export function FlodeskForm() {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const embed = embedRef.current;

    if (!embed) {
      return;
    }

    embed.innerHTML = flodeskEmbedHtml;

    const scripts = Array.from(embed.querySelectorAll("script"));
    scripts.forEach((script) => {
      const executableScript = document.createElement("script");

      Array.from(script.attributes).forEach((attribute) => {
        executableScript.setAttribute(attribute.name, attribute.value);
      });

      executableScript.textContent = script.textContent;
      script.replaceWith(executableScript);
    });

    const root = embed.querySelector<HTMLElement>(
      ".ff-6a9f428fe4fc4babb0b186c7",
    );
    let redirectTimer: number | undefined;

    const redirectAfterFlodeskSuccess = () => {
      if (root?.getAttribute("data-ff-stage") !== "success") {
        return;
      }

      redirectTimer = window.setTimeout(() => {
        window.location.assign("/thanks");
      }, successRedirectDelay);
    };

    const observer = new MutationObserver(redirectAfterFlodeskSuccess);

    if (root) {
      observer.observe(root, {
        attributeFilter: ["data-ff-stage"],
        attributes: true,
      });
      redirectAfterFlodeskSuccess();
    }

    return () => {
      observer.disconnect();
      if (redirectTimer) {
        window.clearTimeout(redirectTimer);
      }
      embed.innerHTML = "";
    };
  }, []);

  return (
    <div
      aria-label="Book Free Consultation form"
      className="flodesk-form-shell rounded-[2rem] border border-brand-primary/15 bg-white p-5 shadow-soft sm:p-8"
      ref={embedRef}
    />
  );
}
