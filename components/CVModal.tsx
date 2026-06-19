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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              CV Görüntüle / View CV
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
            Select language / Dil seçiniz
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => openPdf('en')}
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              <FileText className="w-6 h-6" />
              English CV
            </button>
            <button
              onClick={() => openPdf('tr')}
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-teal-600 text-white font-bold shadow-lg hover:bg-teal-700 transition-all transform hover:-translate-y-1 active:scale-95"
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
