"use client";

interface ConfirmationModalProps {
  title: string;
  onClose: () => void;
}

export default function ConfirmationModal({ title, onClose }: ConfirmationModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ícone de sucesso */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="text-center">
          <h2 id="modal-title" className="text-lg font-bold text-gray-900 mb-1">
            Candidatura Confirmada!
          </h2>
          <p className="text-sm text-gray-600">
            Sua inscrição para a vaga{" "}
            <span className="font-semibold text-gray-800">&ldquo;{title}&rdquo;</span>{" "}
            foi recebida com sucesso. Fique atento ao e-mail institucional.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-xl transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}