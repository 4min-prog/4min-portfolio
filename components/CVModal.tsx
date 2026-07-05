import React from 'react';
import { X, FileText } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvT: any;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, cvT }) => {
  if (!isOpen) return null;

  const openPdf = (lang: 'en' | 'tr') => {
    const url = lang === 'en' ? '/cv-en.pdf' : '/cv-tr.pdf';
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-deep/80 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-surface border border-border rounded-2xl w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-accent" />
            <h2 className="text-xl font-bold text-white">
              {cvT.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-deep transition-colors"
          >
            <X className="w-5 h-5 text-muted" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-secondary text-center mb-6">
            {cvT.desc}
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => openPdf('en')}
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-deep text-white font-bold border border-border hover:border-accent transition-all active:scale-95"
            >
              <FileText className="w-6 h-6" />
              {cvT.en}
            </button>
            <button
              onClick={() => openPdf('tr')}
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-deep text-white font-bold border border-border hover:border-accent transition-all active:scale-95"
            >
              <FileText className="w-6 h-6" />
              {cvT.tr}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
