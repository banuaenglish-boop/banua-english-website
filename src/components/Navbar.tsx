"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { List, X, CaretDown } from "@phosphor-icons/react/dist/ssr";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8 py-3 md:py-4 bg-white border-b border-gray-100 transition-transform duration-300 ease-in-out shadow-sm ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="English Banua Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#1F2937]">
          <Link href="/" className="hover:text-[#33469b] transition-colors">Home</Link>

          {/* Dropdown Program & Event */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-[#33469b] transition-colors">
              Program & Event
              <CaretDown size={12} weight="bold" className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top translate-y-2 group-hover:translate-y-0">
              <div className="p-2 flex flex-col gap-1">
                <Link href="/program" className="px-4 py-2 hover:bg-gray-50 rounded-lg text-[#33469b] transition-colors text-sm font-medium">Kelas & Program</Link>
                <Link href="/webinar" className="px-4 py-2 hover:bg-gray-50 rounded-lg text-[#33469b] transition-colors text-sm font-medium">Webinar</Link>
                <Link href="/recording" className="px-4 py-2 hover:bg-gray-50 rounded-lg text-[#33469b] transition-colors text-sm font-medium">Recording</Link>
              </div>
            </div>
          </div>

          <Link href="/testimoni" className="hover:text-[#33469b] transition-colors">Alumni</Link>
          <Link href="/tentang-kami" className="hover:text-[#33469b] transition-colors">Tentang Kami</Link>
        </div>

        {/* Desktop CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link href="/kontak" className="hidden md:block">
            <button className="bg-[#33469b] hover:bg-[#233276] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Daftar Sekarang
            </button>
          </Link>

          {/* Mobile CTA button (small) */}
          <Link href="/kontak" className="md:hidden">
            <button className="bg-[#33469b] text-white px-4 py-2 rounded-full text-xs font-semibold">
              Daftar
            </button>
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-[#1F2937] hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[80vw] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <img src="/logo.png" alt="English Banua Logo" className="h-8 w-auto" />
            <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-gray-700">
              <X size={22} weight="bold" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-1 p-5 flex-1 overflow-y-auto">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center px-4 py-3 rounded-xl text-[#1a2557] font-semibold hover:bg-gray-50 transition-colors text-sm">
              Home
            </Link>

            {/* Accordion Program & Event */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-[#1a2557] font-semibold hover:bg-gray-50 transition-colors text-sm"
                onClick={() => setProgramOpen(!programOpen)}
              >
                <span>Program & Event</span>
                <CaretDown size={14} weight="bold" className={`transition-transform duration-200 ${programOpen ? "rotate-180" : ""}`} />
              </button>
              {programOpen && (
                <div className="ml-4 flex flex-col gap-1 mt-1 border-l-2 border-blue-100 pl-3">
                  <Link href="/program" onClick={() => setMenuOpen(false)} className="py-2 px-3 text-sm text-[#33469b] font-medium hover:bg-blue-50 rounded-lg transition-colors">Kelas & Program</Link>
                  <Link href="/webinar" onClick={() => setMenuOpen(false)} className="py-2 px-3 text-sm text-[#33469b] font-medium hover:bg-blue-50 rounded-lg transition-colors">Webinar</Link>
                  <Link href="/recording" onClick={() => setMenuOpen(false)} className="py-2 px-3 text-sm text-[#33469b] font-medium hover:bg-blue-50 rounded-lg transition-colors">Recording</Link>
                </div>
              )}
            </div>

            <Link href="/testimoni" onClick={() => setMenuOpen(false)} className="flex items-center px-4 py-3 rounded-xl text-[#1a2557] font-semibold hover:bg-gray-50 transition-colors text-sm">
              Alumni
            </Link>
            <Link href="/tentang-kami" onClick={() => setMenuOpen(false)} className="flex items-center px-4 py-3 rounded-xl text-[#1a2557] font-semibold hover:bg-gray-50 transition-colors text-sm">
              Tentang Kami
            </Link>
            <Link href="/kontak" onClick={() => setMenuOpen(false)} className="flex items-center px-4 py-3 rounded-xl text-[#1a2557] font-semibold hover:bg-gray-50 transition-colors text-sm">
              Kontak
            </Link>
          </nav>

          {/* Panel Footer CTA */}
          <div className="p-5 border-t border-gray-100">
            <Link href="/kontak" onClick={() => setMenuOpen(false)} className="block">
              <button className="w-full bg-[#33469b] hover:bg-[#233276] text-white py-3.5 rounded-2xl text-sm font-bold transition-all shadow-lg">
                Daftar Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
