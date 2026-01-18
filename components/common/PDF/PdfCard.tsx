// components/ui/ResourceCard.tsx
"use client";

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { PdfModel } from './PdfModel';

interface PdfCardProps {
  id: number;
  title: string;
  description: string;
  pdfUrl: string;
  grade: string;
  subject: string;
  worksheetSkills: { name: string }[];
}

export const PdfCard = (props: PdfCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group w-full max-w-[300px] bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
      >
        {/* PDF Thumbnail Area */}
        <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-amber-400 text-[10px] font-black px-3 py-1.5 rounded-lg uppercase shadow-sm">
              Interactive
            </span>
          </div>
          <iframe src={`${props.pdfUrl}#toolbar=0&navpanes=0`} className="w-full h-full pointer-events-none scale-110" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3">
          <div className="flex gap-2">
            <span className="bg-slate-100 text-[10px] font-bold px-3 py-1 rounded-md text-slate-600 uppercase tracking-tighter">{props.subject}</span>
            <span className="border border-slate-200 text-[10px] font-bold px-3 py-1 rounded-md text-slate-600 uppercase tracking-tighter">{props.grade}</span>
          </div>
          
          <h3 className="text-2xl font-serif font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
            {props.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
            {props.description}
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-50 p-4 flex justify-between items-center bg-white">
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
            {props.subject} PRACTICE
          </span>
          <div className="flex items-center gap-1 text-blue-600 font-bold text-sm">
            Preview <ChevronRight size={18} />
          </div>
        </div>
      </div>

      <PdfModel 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={props} 
      />
    </>
  );
};