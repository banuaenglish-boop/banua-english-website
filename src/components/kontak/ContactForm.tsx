"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  PaperPlaneTilt,
  CheckCircle,
  User,
  Phone,
  EnvelopeSimple,
  ChatCircleDots,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

const programOptions = [
  "Private 1-on-1",
  "IELTS Preparation (Offline)",
  "IELTS for Scholarship",
  "IELTS Speaking",
  "IELTS Workshop",
  "Online Scoring (IELTS/TOEFL)",
  "Basic Grammar Class",
  "Webinar Gratis",
];

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a2557] font-inter placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#2C3E8A] focus:ring-2 focus:ring-[#2C3E8A]/10";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, this would POST to an API route or form service.
    // For now, show success state and offer WhatsApp handoff.
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const waMessage = encodeURIComponent(
    `Halo English Banua! 👋\n\nNama: ${formData.name || "-"}\nProgram yang diminati: ${
      formData.program || "-"
    }\n\nPesan: ${formData.message || "-"}`
  );

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white p-8 md:p-12 shadow-md text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-6">
          <CheckCircle size={40} weight="bold" />
        </span>
        <h3 className="font-poppins font-bold text-2xl text-[#1a2557] mb-3">
          Terima Kasih, {formData.name.split(" ")[0] || "Kak"}! 🎉
        </h3>
        <p className="text-sm text-gray-500 font-inter leading-relaxed max-w-sm mb-8">
          Data pendaftaranmu sudah kami terima. Tim kami akan segera
          menghubungimu. Untuk respons lebih cepat, lanjutkan percakapan via
          WhatsApp:
        </p>
        <a
          href={`https://wa.me/6281234567890?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] px-7 py-3.5 text-sm font-poppins font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <PaperPlaneTilt size={16} weight="bold" />
          Lanjut via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-md">
      <h2 className="font-poppins font-bold text-xl md:text-2xl text-[#1a2557] mb-1">
        Form Pendaftaran
      </h2>
      <p className="text-xs text-gray-500 font-inter mb-6">
        Isi form di bawah, tim kami akan menghubungimu maksimal 1×24 jam.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-bold text-[#1a2557]"
          >
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User
              size={16}
              weight="bold"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Contoh: Rizky Febrian"
              className={cn(inputClass, "pl-11")}
            />
          </div>
        </div>

        {/* Phone + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-xs font-bold text-[#1a2557]"
            >
              No. WhatsApp <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone
                size={16}
                weight="bold"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="08xxxxxxxxxx"
                className={cn(inputClass, "pl-11")}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-bold text-[#1a2557]"
            >
              Email
            </label>
            <div className="relative">
              <EnvelopeSimple
                size={16}
                weight="bold"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                className={cn(inputClass, "pl-11")}
              />
            </div>
          </div>
        </div>

        {/* Program selection */}
        <div>
          <label
            htmlFor="program"
            className="mb-1.5 block text-xs font-bold text-[#1a2557]"
          >
            Program yang Diminati <span className="text-red-500">*</span>
          </label>
          <select
            id="program"
            name="program"
            required
            value={formData.program}
            onChange={handleChange}
            className={cn(
              inputClass,
              "appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%223%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10"
            )}
          >
            <option value="" disabled>
              Pilih program...
            </option>
            {programOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-xs font-bold text-[#1a2557]"
          >
            Ceritakan Targetmu
          </label>
          <div className="relative">
            <ChatCircleDots
              size={16}
              weight="bold"
              className="pointer-events-none absolute left-4 top-4 text-gray-400"
            />
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Contoh: Saya ingin mencapai IELTS 7.0 untuk mendaftar S2 di Australia..."
              className={cn(inputClass, "pl-11 resize-none")}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2C3E8A] px-4 py-4 text-sm font-poppins font-bold text-white transition-all duration-300 hover:bg-[#1a2557] hover:shadow-xl hover:-translate-y-0.5"
        >
          <PaperPlaneTilt
            size={16}
            weight="bold"
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
          />
          Kirim Pendaftaran
        </button>

        <p className="text-center text-[11px] text-gray-400 font-inter">
          Data kamu aman dan hanya digunakan untuk keperluan pendaftaran.
        </p>
      </form>
    </div>
  );
}
