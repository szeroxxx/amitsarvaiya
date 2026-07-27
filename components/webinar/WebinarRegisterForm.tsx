"use client";

import { Button } from "@/components/ui/Button";
import { WEBINAR_PAGE } from "@/constants/webinar-content";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function WebinarRegisterForm({ source }: { source: string }) {
  const { reserveSeat } = WEBINAR_PAGE;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !age || !gender) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/webinar-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, age, gender, source }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setName("");
      setPhone("");
      setAge("");
      setGender("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 w-full">
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={reserveSeat.namePlaceholder}
        className="w-full px-4 py-3.5 rounded-sm text-textPrimary placeholder:text-textPrimary/50 border-2 border-border focus:border-textPrimary focus:outline-none"
      />
      <input
        type="tel"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder={reserveSeat.phonePlaceholder}
        className="w-full px-4 py-3.5 rounded-sm text-textPrimary placeholder:text-textPrimary/50 border-2 border-border focus:border-textPrimary focus:outline-none"
      />
      <div className="flex gap-3">
        <select
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-1/2 px-4 py-3.5 rounded-sm text-textPrimary border-2 border-border focus:border-textPrimary focus:outline-none"
        >
          <option value="" disabled>
            {reserveSeat.ageLabel}
          </option>
          {reserveSeat.ageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-1/2 px-4 py-3.5 rounded-sm text-textPrimary border-2 border-border focus:border-textPrimary focus:outline-none"
        >
          <option value="" disabled>
            {reserveSeat.genderLabel}
          </option>
          {reserveSeat.genderOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <Button
        type="submit"
        variant="secondary"
        size="lg"
        disabled={status === "submitting"}
        className="w-full bg-textPrimary text-white hover:bg-textPrimary/90"
      >
        {status === "submitting" && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {status === "submitting" ? reserveSeat.submittingText : reserveSeat.ctaText}
      </Button>

      {status === "success" && (
        <p className="text-sm font-medium text-green-700">{reserveSeat.successText}</p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-700">{reserveSeat.errorText}</p>
      )}
    </form>
  );
}
