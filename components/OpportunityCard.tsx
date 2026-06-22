"use client";

import { useState } from "react";
import { Opportunity, CATEGORY_COLORS } from "@/lib/data";
import ConfirmationModal from "./ConfirmationModal";

interface OpportunityCardProps {
  opportunity: Opportunity;
  initialApplied?: boolean;
}

export default function OpportunityCard({ opportunity, initialApplied = false }: OpportunityCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [applied, setApplied] = useState(initialApplied);
  const [showModal, setShowModal] = useState(false);

  const badgeColor = CATEGORY_COLORS[opportunity.categoria];

  function handleApply() {
    if (!applied) {
      setShowModal(true);
    }
  }

  function handleConfirm() {
    setApplied(true);
    setShowModal(false);
  }

  function handleUnapply() {
    setApplied(false);
  }

  return (
    <>
      <article
        className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
        aria-label={`Vaga: ${opportunity.titulo}`}
      >
        {/* Cabeçalho do card — sempre visível */}
        <div
          className="p-4 cursor-pointer select-none"
          onClick={() => setExpanded((prev) => !prev)}
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          onKeyDown={(e) => e.key === "Enter" && setExpanded((prev) => !prev)}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              {/* Badge de categoria */}
              <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${badgeColor}`}>
                {opportunity.categoria}
              </span>

              {/* Título */}
              <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2">
                {opportunity.titulo}
              </h3>

              {/* Professor */}
              <p className="text-xs text-gray-500 mt-1 truncate">
                {opportunity.professor} · {opportunity.departamento}
              </p>
            </div>

            {/* Remuneração e chevron */}
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-sm font-bold text-green-700 whitespace-nowrap">
                {opportunity.remuneracao}
              </span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Indicador de candidatura */}
          {applied && (
            <div className="mt-2 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs text-green-700 font-medium">Candidatura enviada</span>
            </div>
          )}
        </div>

        {/* Detalhes expandidos */}
        {expanded && (
          <div className="border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              {/* Métricas rápidas */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span><strong>{opportunity.vagas}</strong> {opportunity.vagas === 1 ? "vaga" : "vagas"}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Prazo: <strong>{opportunity.prazo}</strong></span>
                </div>
              </div>

              {/* Descrição */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Descrição</p>
                <p className="text-sm text-gray-700 leading-relaxed">{opportunity.descricao}</p>
              </div>

              {/* Requisitos */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Requisitos</p>
                <p className="text-sm text-gray-700 leading-relaxed">{opportunity.requisitos}</p>
              </div>
            </div>

            {/* Rodapé com botão de ação */}
            <div className="px-4 pb-4">
              {!applied ? (
                <button
                  onClick={handleApply}
                  className="w-full bg-blue-700 hover:bg-blue-800 active:scale-95 text-white font-semibold py-2.5 rounded-xl transition-all text-sm shadow-sm"
                >
                  Inscrever-se
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="w-full bg-gray-100 text-gray-500 font-semibold py-2.5 rounded-xl text-sm text-center cursor-not-allowed select-none">
                    ✓ Candidatura Enviada
                  </div>
                  <button
                    onClick={handleUnapply}
                    className="w-full border border-red-300 text-red-600 hover:bg-red-50 font-medium py-2 rounded-xl transition-colors text-sm"
                  >
                    Desinscrever-se
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </article>

      {/* Modal de confirmação */}
      {showModal && (
        <ConfirmationModal
          title={opportunity.titulo}
          onClose={handleConfirm}
        />
      )}
    </>
  );
}