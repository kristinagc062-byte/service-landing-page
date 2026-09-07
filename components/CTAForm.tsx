"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, LockKeyhole } from "lucide-react";

type FormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessNameOrIndustry: string;
  websiteOrFacebook: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessNameOrIndustry: "",
  websiteOrFacebook: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nepalPhonePattern = /^\d{10}$/;

export function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function validate(currentValues: FormValues) {
    const nextErrors: FormErrors = {};

    if (!currentValues.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!currentValues.email.trim()) {
      nextErrors.email = "Please enter your active email.";
    } else if (!emailPattern.test(currentValues.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!currentValues.whatsapp.trim()) {
      nextErrors.whatsapp = "Please enter your WhatsApp number.";
    } else if (!nepalPhonePattern.test(currentValues.whatsapp.trim())) {
      nextErrors.whatsapp = "Please enter a 10-digit Nepal WhatsApp number.";
    }

    return nextErrors;
  }

  function handleChange(
    field: keyof FormValues,
    value: FormValues[keyof FormValues],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    setSubmitError("");
    if (submitted) {
      setErrors(validate({ ...values, [field]: value }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setSubmitError("");

    const formData = new FormData(event.currentTarget);
    const submittedValues: FormValues = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      whatsapp: String(formData.get("whatsapp") ?? "").replace(/\D/g, ""),
      businessNameOrIndustry: String(
        formData.get("businessNameOrIndustry") ?? "",
      ),
      websiteOrFacebook: String(formData.get("websiteOrFacebook") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const nextErrors = validate(submittedValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    const savedValues = {
      ...submittedValues,
      whatsapp: `+977${submittedValues.whatsapp}`,
    };
    setValues(submittedValues);

    try {
      const response = await fetch("/api/leads", {
        body: JSON.stringify(savedValues),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as {
          error?: string;
          errors?: FormErrors;
        } | null;

        if (result?.errors) {
          setErrors(result.errors);
        }

        setSubmitError(
          result?.error ?? "Lead submission failed. Please try again.",
        );
        setIsSubmitting(false);
        return;
      }

      window.sessionStorage.setItem(
        "marketing-guide-lead",
        JSON.stringify(savedValues),
      );

      router.push("/thank-you");

      window.setTimeout(() => {
        if (window.location.pathname !== "/thank-you") {
          window.location.assign("/thank-you");
        }
      }, 350);
    } catch {
      setSubmitError("Lead submission failed. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8" id="book-call">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="text-center lg:sticky lg:top-8 lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
            Book Free Consultation
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-5xl">
            Book Free Consultation
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Discover practical ways to use AI and marketing to attract more
            customers, improve your online presence, and create a more
            consistent customer acquisition process.
          </p>
          <div className="mt-7 rounded-[1.5rem] border border-brand-primary/15 bg-brand-soft/70 p-6 text-left shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
              One-to-One Consultation
            </p>
            <h3 className="mt-3 text-2xl font-black text-brand-ink">
              Get a One-to-One Marketing Consultation
            </h3>
            <p className="mt-3 leading-7 text-brand-muted">
              Get personalized guidance for your business and discover how
              AI-powered marketing can help you attract more customers and grow
              online.
            </p>
          </div>
          <div className="mt-7 rounded-[1.5rem] border border-brand-primary/15 bg-white p-6 text-left shadow-soft">
            <h3 className="text-xl font-black text-brand-ink">
              Simple Guidance for Growing Businesses
            </h3>
            <p className="mt-3 leading-7 text-brand-muted">
              Submit your details and we&apos;ll guide you toward smarter,
              practical marketing ideas for your business.
            </p>
          </div>
        </div>

        <form
          className="rounded-[2rem] border border-brand-primary/15 bg-white p-5 shadow-soft sm:p-8"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5">
            <Field
              error={errors.fullName}
              label="Full Name"
              name="fullName"
              onChange={(value) => handleChange("fullName", value)}
              placeholder="Enter your full name"
              required
              value={values.fullName}
            />
            <Field
              error={errors.email}
              label="Email Address"
              name="email"
              onChange={(value) => handleChange("email", value)}
              placeholder="Enter your email address"
              required
              type="email"
              value={values.email}
            />
            <div>
              <label
                className="text-sm font-extrabold text-brand-ink"
                htmlFor="whatsapp"
              >
                WhatsApp Number (+977)
                <span className="text-brand-primary"> *</span>
              </label>
              <div className="mt-2 flex min-h-14 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition focus-within:border-brand-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-brand-primary/15">
                <span className="flex items-center border-r border-slate-200 px-4 text-base font-black text-brand-primary">
                  +977
                </span>
                <input
                  aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                  aria-invalid={Boolean(errors.whatsapp)}
                  className="min-h-14 w-full bg-transparent px-4 text-base text-brand-ink outline-none placeholder:text-slate-400"
                  id="whatsapp"
                  inputMode="numeric"
                  name="whatsapp"
                  maxLength={10}
                  onChange={(event) =>
                    handleChange(
                      "whatsapp",
                      event.target.value.replace(/\D/g, "").slice(0, 10),
                    )
                  }
                  placeholder="Enter your WhatsApp number"
                  required
                  type="tel"
                  value={values.whatsapp}
                />
              </div>
              {errors.whatsapp ? (
                <p className="mt-2 text-sm font-semibold text-red-600" id="whatsapp-error">
                  {errors.whatsapp}
                </p>
              ) : null}
            </div>
            <Field
              label="Business Name or Industry"
              name="businessNameOrIndustry"
              onChange={(value) =>
                handleChange("businessNameOrIndustry", value)
              }
              placeholder="Enter your business name or industry"
              value={values.businessNameOrIndustry}
            />
            <Field
              label="Website or Facebook URL"
              name="websiteOrFacebook"
              onChange={(value) => handleChange("websiteOrFacebook", value)}
              placeholder="Enter your website or Facebook URL"
              type="url"
              value={values.websiteOrFacebook}
            />
            <div>
              <label
                className="text-sm font-extrabold text-brand-ink"
                htmlFor="message"
              >
                Anything you want to say
              </label>
              <textarea
                className="mt-2 min-h-32 w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/15"
                id="message"
                name="message"
                onChange={(event) => handleChange("message", event.target.value)}
                placeholder="Tell us anything you want to say"
                value={values.message}
              />
            </div>
          </div>

          <button
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-4 text-base font-black text-white shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-[#471541] focus:outline-none focus:ring-4 focus:ring-brand-primary/20 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Booking Your Consultation..." : "Book Free Consultation"}
            {isSubmitting ? (
              <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
            ) : (
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
          {isSubmitting ? (
            <p className="mt-4 rounded-2xl bg-brand-soft px-4 py-3 text-center text-sm font-bold text-brand-primary">
              Submitting your consultation request...
            </p>
          ) : null}
          {submitError ? (
            <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-center text-sm font-bold text-red-700">
              {submitError}
            </p>
          ) : null}
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-semibold text-brand-muted">
            <LockKeyhole aria-hidden="true" className="h-4 w-4 text-brand-secondary" />
            We respect your privacy. No spam.
          </p>
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  error?: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
  value: string;
};

function Field({
  error,
  label,
  name,
  onChange,
  placeholder,
  required,
  type = "text",
  value,
}: FieldProps) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label className="text-sm font-extrabold text-brand-ink" htmlFor={name}>
        {label}
        {required ? <span className="text-brand-primary"> *</span> : null}
      </label>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        className="mt-2 min-h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-base text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/15"
        id={name}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
      {error ? (
        <p className="mt-2 text-sm font-semibold text-red-600" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
