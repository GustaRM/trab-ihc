"use client";

import { useState, useCallback } from "react";
import { OPPORTUNITIES, CATEGORY_COLORS, Opportunity } from "@/lib/data";
import Navbar from "@/components/Navbar";
import CreateOpportunityModal from "@/components/CreateOpportunityModal";
import Toast from "@/components/Toast";

type NewOpportunity = Omit<Opportunity, "id">;

export default function DocentePage() {
  const [vagas, setVagas] = useState<Opportunity[]>(
    OPPORTUNITIES.filter((op) => op.professor.includes("Helena") || op.professor.includes("Carlos"))
  );
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleCloseToast = useCallback(() => setToast(null), []);

  function handleSave(newOp: NewOpportunity) {
    const created: Opportunity = {
      ...newOp,
      id: Date.now(),
    };
    setVagas((prev) => [created, ...prev]);
    setShowModal(false);
    setToast(`Oportunidade "${created.titulo}" publicada com sucesso!`);
  }

  function handleDelete(id: number) {
    setVagas((prev) => prev.filter((v) => v.id !== id));
  }

  const badgeColor = (cat: Exclude<typeof vagas[0]["categoria"], undefined>) =>
    CATEGORY_COLORS[cat];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="docente" userName="Helena Costa" />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
        {/* Cabeçalho do painel */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">Painel do Docente</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              {vagas.length} {vagas.length === 1 ? "oportunidade publicada" : "oportunidades publicadas"}
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Nova Oportunidade
          </button>
        </div>

        {/* Estatísticas rápidas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {(["Extensão", "Monitoria", "Iniciação Científica", "Pesquisa"] as const).map((cat) => {
            const count = vagas.filter((v) => v.categoria === cat).length;
            return (
              <div key={cat} className="bg-white rounded-xl border border-gray-100 p-3 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-gray-900">{count}</p>
                <p className={`text-xs font-semibold mt-0.5 px-2 py-0.5 rounded-full inline-block ${CATEGORY_COLORS[cat]}`}>
                  {cat}
                </p>
              </div>
            );
          })}
        </div>

        {/* Lista de vagas */}
        {vagas.length > 0 ? (
          <div className="space-y-3">
            {vagas.map((vaga) => (
              <div
                key={vaga.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${badgeColor(vaga.categoria)}`}>
                        {vaga.categoria}
                      </span>
                      <h3 className="text-sm font-bold text-gray-900 leading-snug">
                        {vaga.titulo}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {vaga.departamento}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="text-sm font-bold text-green-700 whitespace-nowrap">
                        {vaga.remuneracao}
                      </span>
                      <button
                        onClick={() => handleDelete(vaga.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50"
                        aria-label={`Remover vaga ${vaga.titulo}`}
                        title="Remover vaga"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Detalhes inline */}
                  <div className="mt-3 flex flex-wrap gap-4 border-t border-gray-50 pt-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span><strong>{vaga.vagas}</strong> {vaga.vagas === 1 ? "vaga" : "vagas"}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Prazo: <strong>{vaga.prazo}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 flex-1 min-w-0">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="truncate">{vaga.descricao}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-dashed border-gray-200">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-gray-700 font-semibold">Nenhuma oportunidade publicada</p>
            <p className="text-gray-400 text-sm mt-1 mb-4">Clique em &quot;Nova Oportunidade&quot; para começar.</p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              Criar primeira oportunidade
            </button>
          </div>
        )}
      </main>

      {/* Modal de criação */}
      {showModal && (
        <CreateOpportunityModal
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

      {/* Toast de sucesso */}
      {toast && (
        <Toast
          message={toast}
          type="success"
          onClose={handleCloseToast}
        />
      )}
    </div>
  );
}