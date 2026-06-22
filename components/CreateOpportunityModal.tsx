"use client";

import { useState, FormEvent } from "react";
import { Opportunity, Categoria } from "@/lib/data";

type NewOpportunity = Omit<Opportunity, "id">;

interface CreateOpportunityModalProps {
  onClose: () => void;
  onSave: (opportunity: NewOpportunity) => void;
}

const CATEGORIAS: Exclude<Categoria, "Todos">[] = [
  "Extensão",
  "Monitoria",
  "Iniciação Científica",
  "Pesquisa",
];

export default function CreateOpportunityModal({ onClose, onSave }: CreateOpportunityModalProps) {
  const [form, setForm] = useState<NewOpportunity>({
    titulo: "",
    categoria: "Extensão",
    professor: "",
    departamento: "",
    remuneracao: "",
    vagas: 1,
    descricao: "",
    prazo: "",
    requisitos: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof NewOpportunity, string>>>({});

  function validate(): boolean {
    const newErrors: Partial<Record<keyof NewOpportunity, string>> = {};
    if (!form.titulo.trim()) newErrors.titulo = "Título é obrigatório.";
    if (!form.professor.trim()) newErrors.professor = "Nome do professor é obrigatório.";
    if (!form.departamento.trim()) newErrors.departamento = "Departamento é obrigatório.";
    if (!form.remuneracao.trim()) newErrors.remuneracao = "Remuneração é obrigatória.";
    if (!form.descricao.trim()) newErrors.descricao = "Descrição é obrigatória.";
    if (!form.prazo.trim()) newErrors.prazo = "Prazo é obrigatório.";
    if (!form.requisitos.trim()) newErrors.requisitos = "Requisitos são obrigatórios.";
    if (form.vagas < 1) newErrors.vagas = "Mínimo de 1 vaga.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (validate()) {
      onSave(form);
    }
  }

  function handleChange(field: keyof NewOpportunity, value: string | number) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-8 bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 id="create-modal-title" className="text-lg font-bold text-gray-900">
            Nova Oportunidade
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100"
            aria-label="Fechar modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} noValidate className="px-6 py-5 space-y-4">
          {/* Categoria */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
              Categoria
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIAS.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleChange("categoria", cat)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    form.categoria === cat
                      ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                      : "bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Título */}
          <div>
            <label htmlFor="titulo" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
              Título da Oportunidade *
            </label>
            <input
              id="titulo"
              type="text"
              value={form.titulo}
              onChange={(e) => handleChange("titulo", e.target.value)}
              placeholder="Ex: Extensão em Visão Computacional"
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition-colors ${
                errors.titulo
                  ? "border-red-400 bg-red-50 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              }`}
            />
            {errors.titulo && <p className="text-xs text-red-500 mt-1">{errors.titulo}</p>}
          </div>

          {/* Professor e Departamento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="professor" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Professor Responsável *
              </label>
              <input
                id="professor"
                type="text"
                value={form.professor}
                onChange={(e) => handleChange("professor", e.target.value)}
                placeholder="Ex: Prof. Dr. Carlos Mendes"
                className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition-colors ${
                  errors.professor
                    ? "border-red-400 bg-red-50 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
              />
              {errors.professor && <p className="text-xs text-red-500 mt-1">{errors.professor}</p>}
            </div>
            <div>
              <label htmlFor="departamento" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Departamento *
              </label>
              <input
                id="departamento"
                type="text"
                value={form.departamento}
                onChange={(e) => handleChange("departamento", e.target.value)}
                placeholder="Ex: DCC - Ciência da Computação"
                className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition-colors ${
                  errors.departamento
                    ? "border-red-400 bg-red-50 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
              />
              {errors.departamento && <p className="text-xs text-red-500 mt-1">{errors.departamento}</p>}
            </div>
          </div>

          {/* Remuneração, Vagas e Prazo */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="remuneracao" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Remuneração *
              </label>
              <input
                id="remuneracao"
                type="text"
                value={form.remuneracao}
                onChange={(e) => handleChange("remuneracao", e.target.value)}
                placeholder="Ex: R$ 500,00/mês"
                className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition-colors ${
                  errors.remuneracao
                    ? "border-red-400 bg-red-50 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
              />
              {errors.remuneracao && <p className="text-xs text-red-500 mt-1">{errors.remuneracao}</p>}
            </div>
            <div>
              <label htmlFor="vagas" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Nº de Vagas *
              </label>
              <input
                id="vagas"
                type="number"
                min={1}
                max={20}
                value={form.vagas}
                onChange={(e) => handleChange("vagas", Number(e.target.value))}
                className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition-colors ${
                  errors.vagas
                    ? "border-red-400 bg-red-50 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
              />
              {errors.vagas && <p className="text-xs text-red-500 mt-1">{errors.vagas}</p>}
            </div>
            <div>
              <label htmlFor="prazo" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Prazo *
              </label>
              <input
                id="prazo"
                type="date"
                value={form.prazo}
                onChange={(e) => handleChange("prazo", e.target.value)}
                className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition-colors ${
                  errors.prazo
                    ? "border-red-400 bg-red-50 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
              />
              {errors.prazo && <p className="text-xs text-red-500 mt-1">{errors.prazo}</p>}
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label htmlFor="descricao" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
              Descrição *
            </label>
            <textarea
              id="descricao"
              rows={3}
              value={form.descricao}
              onChange={(e) => handleChange("descricao", e.target.value)}
              placeholder="Descreva as atividades e objetivos da oportunidade..."
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition-colors resize-none ${
                errors.descricao
                  ? "border-red-400 bg-red-50 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              }`}
            />
            {errors.descricao && <p className="text-xs text-red-500 mt-1">{errors.descricao}</p>}
          </div>

          {/* Requisitos */}
          <div>
            <label htmlFor="requisitos" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
              Requisitos *
            </label>
            <textarea
              id="requisitos"
              rows={2}
              value={form.requisitos}
              onChange={(e) => handleChange("requisitos", e.target.value)}
              placeholder="Ex: Cursando a partir do 4º período, conhecimento em Python..."
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition-colors resize-none ${
                errors.requisitos
                  ? "border-red-400 bg-red-50 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              }`}
            />
            {errors.requisitos && <p className="text-xs text-red-500 mt-1">{errors.requisitos}</p>}
          </div>

          {/* Botões */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm shadow-sm"
            >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}