"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  userType?: "estudante" | "docente";
  userName?: string;
}

export default function Navbar({ userType, userName }: NavbarProps) {
  const pathname = usePathname();

  return (
    <header className="bg-blue-800 text-white shadow-md sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo e título */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-blue-800" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs text-blue-200 leading-none">UFJF</p>
            <p className="text-sm font-semibold leading-tight">Ações de Extensão</p>
          </div>
        </Link>

        {/* Navegação e usuário */}
        <div className="flex items-center gap-4">
          {userType && (
            <nav className="flex items-center gap-1">
              <Link
                href="/estudante"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  pathname === "/estudante"
                    ? "bg-white text-blue-800"
                    : "text-blue-100 hover:bg-blue-700"
                }`}
              >
                Oportunidades
              </Link>
              {userType === "docente" && (
                <Link
                  href="/docente"
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    pathname === "/docente"
                      ? "bg-white text-blue-800"
                      : "text-blue-100 hover:bg-blue-700"
                  }`}
                >
                  Painel Docente
                </Link>
              )}
            </nav>
          )}

          {userName && (
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
                {userName.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm text-blue-100 hidden sm:block">{userName}</span>
            </div>
          )}

          {!userType && (
            <Link
              href="/"
              className="text-blue-100 hover:text-white text-sm transition-colors"
            >
              Início
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}