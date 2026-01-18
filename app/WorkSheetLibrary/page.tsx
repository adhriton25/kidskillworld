"use client";

import React, { useState, useMemo } from 'react';
import { PdfCard } from '@/components/common/PDF/PdfCard';
import { X } from 'lucide-react';
import { Chip } from '@/components/Base/Chip';

// Sample Data Structure
const ALL_RESOURCES = [
{
    id: 1,
    title: "Addition Adventures",
    description: "Master single-digit addition with fun jungle animal illustrations. Perfect for early learners building a foundation in arithmetic.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // Replace with your actual PDF URL
    grade: "Grade 1",
    subject: "Math",
    worksheetSkills: [
      { name: "Addition" },
      { name: "Counting" },
      { name: "Logic" }
    ]
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    description: "An introduction to mechanics and thermodynamics. Explore the laws of motion through interactive diagrams and exercises.",
    pdfUrl:  "https://www.cte.iup.edu/cte/Resources/PDF_TestPage.pdf",//"https://www.africau.edu/images/default/sample.pdf",
    grade: "Grade 10",
    subject: "Physics",
    worksheetSkills: [
      { name: "Mechanics" },
      { name: "Thermodynamics" }
    ]
  }
];

const SUBJECTS = ["Math", "English Language Arts", "Science", "Social Studies", "Foreign Language"];
const GRADES = ["Pre-K", "K", "1st", "2nd", "3rd", "4th", "5th"];

export default function WorkSheetLibrary() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  // Filter Logic
  const filteredWorkSheet = useMemo(() => {
    return ALL_RESOURCES.filter(item => {
      const matchSubject = !selectedSubject || item.subject === selectedSubject;
      const matchGrade = !selectedGrade || item.grade === selectedGrade;
      return matchSubject && matchGrade;
    });
  }, [selectedSubject, selectedGrade]);

  const removeFilter = (type: 'subject' | 'grade') => {
    if (type === 'subject') setSelectedSubject(null);
    if (type === 'grade') setSelectedGrade(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* LEFT SIDEBAR - FILTERS */}
      <aside className="w-full md:w-64 p-6 border-r border-gray-100">
        <div className="mb-8">
          <h3 className="font-bold text-slate-700 mb-4">Subjects</h3>
          <div className="space-y-3">
            {SUBJECTS.map(sub => (
              <label key={sub} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="radio" 
                  name="subject"
                  checked={selectedSubject === sub}
                  onChange={() => setSelectedSubject(sub)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" 
                />
                <span className={`text-sm ${selectedSubject === sub ? 'text-blue-600 font-medium' : 'text-slate-500'}`}>
                  {sub}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-700 mb-4">Grade Level</h3>
          <div className="grid grid-cols-2 gap-2">
            {GRADES.map(grade => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`py-2 text-xs font-medium rounded-md border transition-all ${
                  selectedGrade === grade 
                  ? 'bg-blue-50 border-blue-500 text-blue-600' 
                  : 'bg-white border-gray-200 text-slate-500 hover:border-gray-400'
                }`}
              >
                {grade}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-slate-800 mb-2">
            {selectedSubject || "All Resources"}
          </h1>
          <p className="text-slate-400 mb-6">{filteredWorkSheet.length} results</p>

          {/* ACTIVE FILTER CHIPS */}
          <div className="flex flex-wrap gap-2 mb-8">
            {selectedSubject && (
              <Chip label={selectedSubject} variant='filter' color='var(--grape-purple)' onRemove={() => removeFilter('subject')} />
            )}
            {selectedGrade && (
              <Chip label={selectedGrade} variant='filter' color='var(--leaf-green)' onRemove={() => removeFilter('grade')} />
            )}
            {(selectedSubject || selectedGrade) && (
              <button 
                onClick={() => { setSelectedSubject(null); setSelectedGrade(null); }}
                className="text-blue-600 text-sm font-medium hover:underline ml-2"
              >
                Clear All
              </button>
            )}
          </div>

          {/* GRID OF CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWorkSheet.map(res => (
              <PdfCard key={res.id} {...res} />
            ))}
          </div>

          {/* PAGINATION PLACEHOLDER */}
          <div className="mt-16 flex justify-center gap-2">
             <button className="px-4 py-2 border rounded-md hover:bg-gray-50">Previous</button>
             <button className="px-4 py-2 bg-blue-600 text-white rounded-md">1</button>
             <button className="px-4 py-2 border rounded-md hover:bg-gray-50">2</button>
             <button className="px-4 py-2 border rounded-md hover:bg-gray-50">Next</button>
          </div>
        </div>
      </main>
    </div>
  );
}

