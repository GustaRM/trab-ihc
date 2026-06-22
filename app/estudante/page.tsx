"use client";

import { useState, useMemo } from "react";
import { OPPORTUNITIES, Categoria } from "@/lib/data";
import Navbar from "@/components/Navbar";
import FilterChips from "@/components/FilterChips";
import OpportunityCard from "@/components/OpportunityCard";

export default function EstudantePage() {
  const [activeFilter, setActiveFilter] = useState<Categoria>("Todos");
  const [search, setSearch] = useState("");

  // Contagens por categoria para exibir nos chips
  const counts = useMemo(() => {
    const result: Record<Categoria, number> = {
      Todos: OPPORTUNITIES.length,
      Extensão: 0,
      Monitoria: 0,
      "Iniciação Científica": 0,
      Pesquisa: 0,
    };
    for (const op of OPPORTUNITIES) {
      result[op.categoria]++;
    }
    return result;
  }, []);

  // Filtragem por categoria + busca textual
  const filtered = useMemo(() => {
    return OPPORTUNITIES.filter((op) => {
      const matchCat = activeFilter === "Todos" || op.categoria === activeFilter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        op.titulo.toLowerCase().includes(q) ||
        op.professor.toLowerCase().includes(q) ||
        op.departamento.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeFilter, search]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="estudante" userName="Lucas Oliveira" />

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-5">
        {/* Cabeçalho da página */}
        <div className="mb-4">
          <h1 className="text-xl font-extrabold text-gray-900">Oportunidades</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {filtered.length} {filtered.length === 1 ? "vaga encontrada" : "vagas encontradas"}
          </p>
        </div>

        {/* Barra de busca */}
        <div className="relative mb-4">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder="Buscar por título, professor ou departamento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
          />
        </div>

        {/* Chips de filtro */}
        <div className="mb-5">
          <FilterChips
            selected={activeFilter}
            onChange={setActiveFilter}
            counts={counts}
          />
        </div>

        {/* Lista de cards */}
        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map((op) => (
              <OpportunityCard key={op.id} opportunity={op} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-700 font-semibold">Nenhuma vaga encontrada</p>
            <p className="text-gray-400 text-sm mt-1">Tente ajustar os filtros ou o termo de busca.</p>
            <button
              onClick={() => { setActiveFilter("Todos"); setSearch(""); }}
              className="mt-4 text-sm text-blue-600 font-medium hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </main>
    </div>
  );
}