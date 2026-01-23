"use client";

import React from "react";
import { X, Printer, Download, Play } from "lucide-react";
import { Button } from "@/components/Base/Button";

interface PdfModelProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    description: string;
    pdfUrl: string;
    grade: string;
    subject: string;
    isInteractive: boolean;
    worksheetSkills: { name: string }[];
  };
}

export const PdfModel = ({ isOpen, onClose, data }: PdfModelProps) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    const printWindow = window.open(data.pdfUrl, "_blank");
    printWindow?.print();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = data.pdfUrl;
    link.download = `${data.title}.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X size={24} />
        </button>

        {/* Left Side: Preview */}
        <div className="w-full md:w-1/2 bg-gray-100 p-8 flex items-center justify-center">
          <div className="w-full aspect-[3/4] bg-white shadow-md border border-gray-200 overflow-hidden rounded-lg">
            <iframe
              src={`${data.pdfUrl}#toolbar=0`}
              className="w-full h-full"
              title="PDF Preview"
            />
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 p-8 flex flex-col gap-6">
          <div className="flex gap-2">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
              {data.grade}
            </span>
            <span className="border border-gray-300 px-3 py-1 rounded-full text-xs font-bold uppercase">
              {data.subject}
            </span>
          </div>

          <h2 className="text-4xl font-serif font-bold text-slate-800">
            {data.title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {data.description}
          </p>

          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
              Skills Covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.worksheetSkills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-slate-100 px-4 py-2 rounded-lg text-sm font-medium text-slate-700"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            <div className="flex gap-3">
              <Button onClick={handlePrint} variant="primary" size="lg">
                <Printer /> Print Now
              </Button>
              <Button onClick={handleDownload} variant="secondary" size="lg">
                <Download />
                Download
              </Button>
            </div>
            {data.isInteractive && (
              <Button size="lg" variant="tertiary">
                <Play fill="currentColor" />
                Start Interactive Task
              </Button>
            )}
            <p className="text-center text-xs text-gray-400 mt-2 italic">
              * Printable worksheets are available in PDF format.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
