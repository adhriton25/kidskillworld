"use client";

import React, { useState, useEffect } from "react";
import { PdfCard } from "@/components/common/PDF/PdfCard";
import { Pagination } from "@/components/Base/Pagination";
import { getAvailableSkillsAction, getWorksheetsAction } from "../actions/worksheets";
import Chip from "@/components/Base/Chip";

const SUBJECTS = [
  "Math",
  "English Language Arts",
  "Science",
  "Social Studies",
  "Foreign Language",
];
const GRADES = ["Pre-K", "K", "1st", "2nd", "3rd", "4th", "5th"];

export default function WorkSheetLibrary() {
  // Filter States
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Data States
  const [resources, setResources] = useState<any[]>([]);
  const [availableSkills, setAvailableSkills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Increased for a better grid view

  // 1. Fetch Worksheets when filters change
  useEffect(() => {
    const loadWorksheets = async () => {
      setIsLoading(true);
      const data = await getWorksheetsAction({
        subjectName: selectedSubject,
        gradeName: selectedGrade,
        skillName: selectedSkill,
      });
      setResources(data || []);
      setCurrentPage(1); // Reset to first page on filter change
      setIsLoading(false);
    };
    loadWorksheets();
  }, [selectedSubject, selectedGrade, selectedSkill]);

  // 2. Fetch Dynamic Skills for Sidebar
  useEffect(() => {
    if (selectedSubject && selectedGrade) {
      getAvailableSkillsAction(selectedSubject, selectedGrade).then(setAvailableSkills);
    } else {
      setAvailableSkills([]);
      setSelectedSkill(null); // Reset skill if subject/grade is cleared
    }
  }, [selectedSubject, selectedGrade]);

  // 3. Logic for pagination of the fetched 'resources'
  const totalPages = Math.ceil(resources.length / itemsPerPage);
  const currentData = resources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const removeFilter = (type: "subject" | "grade" | "skill") => {
    if (type === "subject") setSelectedSubject(null);
    if (type === "grade") setSelectedGrade(null);
    if (type === "skill") setSelectedSkill(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* LEFT SIDEBAR - FILTERS */}
      <aside className="w-full md:w-64 p-6 border-r border-gray-100">
        <div className="mb-8">
          <h3 className="font-bold text-slate-700 mb-4 uppercase text-xs tracking-widest">Subjects</h3>
          <div className="space-y-3">
            {SUBJECTS.map((sub) => (
              <label key={sub} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="subject"
                  checked={selectedSubject === sub}
                  onChange={() => setSelectedSubject(sub)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className={`text-sm transition-colors ${selectedSubject === sub ? "text-[var(--deep-purple)] font-bold" : "text-slate-600 group-hover:text-slate-900"}`}>
                  {sub}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-bold text-slate-700 mb-4 uppercase text-xs tracking-widest">Grade Level</h3>
          <div className="grid grid-cols-2 gap-2">
            {GRADES.map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`py-2 text-xs font-medium rounded-md border transition-all ${
                  selectedGrade === grade
                    ? "bg-[var(--emerald-green)] border-transparent text-white shadow-sm"
                    : "bg-white border-gray-200 text-slate-600 hover:border-gray-400"
                }`}
              >
                {grade}
              </button>
            ))}
          </div>
        </div>

        {selectedSubject && selectedGrade && availableSkills.length > 0 && (
          <div className="animate-in fade-in slide-in-from-left-2 duration-300">
            <h3 className="font-bold text-slate-700 mb-4 uppercase text-xs tracking-widest">Worksheet Skills</h3>
            <div className="flex flex-col gap-1">
              {availableSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(skill)}
                  className={`text-left px-3 py-2 text-sm rounded-lg transition-all ${
                    selectedSkill === skill
                      ? "bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        )}
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8 bg-slate-50/30">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">
              {selectedSubject ? `${selectedSubject} Resources` : "All Worksheets"}
            </h1>
            <p className="text-slate-500">
              {isLoading ? "Searching..." : `${resources.length} worksheets found`}
            </p>
          </header>

          {/* ACTIVE FILTER CHIPS */}
          {(selectedSubject || selectedGrade || selectedSkill) && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {selectedSubject && (
                <Chip text={selectedSubject} variant="primary" onClick={() => removeFilter("subject")} />
              )}
              {selectedGrade && (
                <Chip text={selectedGrade} variant="primary" onClick={() => removeFilter("grade")} />
              )}
              {selectedSkill && (
                <Chip text={selectedSkill} variant="primary" onClick={() => removeFilter("skill")} />
              )}
              <button
                onClick={() => {
                  setSelectedSubject(null);
                  setSelectedGrade(null);
                  setSelectedSkill(null);
                }}
                className="text-slate-400 text-xs font-bold uppercase hover:text-red-500 transition-colors ml-2"
              >
                Clear All
              </button>
            </div>
          )}

          {/* GRID OF CARDS */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 opacity-50">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : resources.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentData.map((res) => (
                <PdfCard key={res.id} {...res} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-slate-400 italic">No worksheets found for this selection.</p>
            </div>
          )}

          {/* PAGINATION */}
          {!isLoading && resources.length > itemsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
}
