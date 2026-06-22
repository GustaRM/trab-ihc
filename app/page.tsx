import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UFJF — Ações de Extensão",
  description: "Sistema de Mapeamento das Ações de Extensão da UFJF",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center justify-center px-4">
      {/* Logo / Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl mb-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-11 h-11 text-blue-800"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
        </div>
        <p className="text-blue-300 text-sm font-medium tracking-widest uppercase mb-1">UFJF</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Ações de Extensão
        </h1>
        <p className="text-blue-200 mt-2 text-sm sm:text-base max-w-sm mx-auto">
          Conectando estudantes e docentes às oportunidades acadêmicas da universidade.
        </p>
      </div>

      {/* Cards de seleção de perfil */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        {/* Estudante */}
        <Link
          href="/estudante"
          className="flex-1 group bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-2xl p-6 text-center transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
        >
          <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/50 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-white mb-1">Sou Estudante</h2>
          <p className="text-blue-200 text-xs leading-relaxed">
            Explore vagas de extensão, monitoria e IC. Candidate-se com um toque.
          </p>
          <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-200 group-hover:text-white transition-colors">
            Explorar vagas
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        {/* Docente */}
        <Link
          href="/docente"
          className="flex-1 group bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-2xl p-6 text-center transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
        >
          <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/50 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-white mb-1">Sou Docente</h2>
          <p className="text-blue-200 text-xs leading-relaxed">
            Publique oportunidades, gerencie candidaturas e acompanhe seu painel.
          </p>
          <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-200 group-hover:text-white transition-colors">
            Acessar painel
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Rodapé */}
      <p className="mt-10 text-blue-400 text-xs text-center">
        Universidade Federal de Juiz de Fora · DCC174 Interação Humano-Computador
      </p>
    </div>
  );
}