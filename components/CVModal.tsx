import React from 'react';
import { X, FileText } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const openPdf = (lang: 'en' | 'tr') => {
    const url = lang === 'en' ? '/cv-en.pdf' : '/cv-tr.pdf';
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090B]/80 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-[#121217] border border-[#23232D] rounded-2xl w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-[#23232D]">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#7C3AED]" />
            <h2 className="text-xl font-bold text-white">
              CV Görüntüle / View CV
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-[#09090B] transition-colors"
          >
            <X className="w-5 h-5 text-[#71717A]" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-[#A1A1AA] text-center mb-6">
            Select language / Dil seçiniz
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => openPdf('en')}
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-[#09090B] text-white font-bold border border-[#23232D] hover:border-[#7C3AED] transition-all active:scale-95"
            >
              <FileText className="w-6 h-6" />
              English CV
            </button>
            <button
              onClick={() => openPdf('tr')}
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-[#09090B] text-white font-bold border border-[#23232D] hover:border-[#7C3AED] transition-all active:scale-95"
            >
              <FileText className="w-6 h-6" />
              Türkçe CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
