"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { PdfModel } from "./PdfModel";
import Chip from "@/components/Base/Chip";

export interface PdfCardProps {
  id: number;
  title: string;
  description: string;
  pdfUrl: string;
  grade: string;
  subject: string;
  isInteractive?: boolean;
  worksheetSkills: { name: string }[];
}

export const PdfCard = ({
  title,
  description,
  grade,
  subject,
  pdfUrl,
  isInteractive = true,
  worksheetSkills,
}: PdfCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        // Reduced max-width from 300px to 240px and rounded corners
        className="group w-full max-w-[240px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300"
      >
        {/* PDF Thumbnail Area - Changed aspect ratio to make it shorter */}
        <div className="relative aspect-[3/2] bg-gray-50 overflow-hidden border-b border-gray-50">
          {isInteractive && (
            <div className="absolute top-2 right-2 z-10">
              <Chip
                variant="tertiary"
                size="sm"
                text="Interactive"
                className="uppercase"
              />
            </div>
          )}
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
            className="w-full h-full pointer-events-none scale-105 origin-top"
          />
        </div>

        {/* Content - Reduced padding and gaps */}
        <div className="p-4 flex flex-col gap-2">
          <div className="flex gap-1.5">
            <span className="bg-slate-50 text-[9px] font-bold px-2 py-0.5 rounded-md text-slate-500 uppercase">
              {subject}
            </span>
            <span className="border border-slate-200 text-[9px] font-bold px-2 py-0.5 rounded-md text-slate-500 uppercase">
              {grade}
            </span>
          </div>

          {/* Smaller font sizes for title and description */}
          <h3 className="text-xl font-serif font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-xs line-clamp-2 leading-snug">
            {description}
          </p>
        </div>

        {/* Footer - Compact height */}
        <div className="border-t border-gray-50 px-4 py-3 flex justify-between items-center bg-white">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
            {subject} PRACTICE
          </span>
          <div className="flex items-center gap-0.5 text-blue-500 font-bold text-xs">
            Preview <ChevronRight size={14} />
          </div>
        </div>
      </div>

      <PdfModel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={{
          title,
          description,
          pdfUrl,
          grade,
          subject,
          isInteractive,
          worksheetSkills,
        }}
      />
    </>
  );
};
