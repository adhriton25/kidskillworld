"use client";

import React, { useState, useMemo, useEffect } from "react";
import { PdfCard, PdfCardProps } from "@/components/common/PDF/PdfCard";
import { X } from "lucide-react";
import { Chip } from "@/components/Base/Chip";
import { Pagination } from "@/components/Base/Pagination";

// Sample Data Structure
const workSheets: PdfCardProps[] = [
  {
    id: 1,
    title: "Addition Adventures",
    description:
      "Master single-digit addition with fun jungle animal illustrations. Perfect for early learners building a foundation in arithmetic.",
    pdfUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // Replace with your actual PDF URL
    grade: "Grade 1",
    subject: "Math",
    worksheetSkills: [
      { name: "Addition" },
      { name: "Counting" },
      { name: "Logic" },
    ],
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    description:
      "An introduction to mechanics and thermodynamics. Explore the laws of motion through interactive diagrams and exercises.",
    pdfUrl: "https://www.cte.iup.edu/cte/Resources/PDF_TestPage.pdf", //"https://www.africau.edu/images/default/sample.pdf",
    grade: "Grade 10",
    subject: "Physics",
    worksheetSkills: [{ name: "Mechanics" }, { name: "Thermodynamics" }],
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    description:
      "An introduction to mechanics and thermodynamics. Explore the laws of motion through interactive diagrams and exercises.",
    pdfUrl: "https://www.cte.iup.edu/cte/Resources/PDF_TestPage.pdf", //"https://www.africau.edu/images/default/sample.pdf",
    grade: "Grade 10",
    subject: "Physics",
    worksheetSkills: [{ name: "Mechanics" }, { name: "Thermodynamics" }],
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    description:
      "An introduction to mechanics and thermodynamics. Explore the laws of motion through interactive diagrams and exercises.",
    pdfUrl: "https://www.cte.iup.edu/cte/Resources/PDF_TestPage.pdf", //"https://www.africau.edu/images/default/sample.pdf",
    grade: "Grade 10",
    subject: "Physics",
    worksheetSkills: [{ name: "Mechanics" }, { name: "Thermodynamics" }],
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    description:
      "An introduction to mechanics and thermodynamics. Explore the laws of motion through interactive diagrams and exercises.",
    pdfUrl: "https://www.cte.iup.edu/cte/Resources/PDF_TestPage.pdf", //"https://www.africau.edu/images/default/sample.pdf",
    grade: "Grade 10",
    subject: "Physics",
    worksheetSkills: [{ name: "Mechanics" }, { name: "Thermodynamics" }],
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    description:
      "An introduction to mechanics and thermodynamics. Explore the laws of motion through interactive diagrams and exercises.",
    pdfUrl: "https://www.cte.iup.edu/cte/Resources/PDF_TestPage.pdf", //"https://www.africau.edu/images/default/sample.pdf",
    grade: "Grade 10",
    subject: "Physics",
    worksheetSkills: [{ name: "Mechanics" }, { name: "Thermodynamics" }],
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    description:
      "An introduction to mechanics and thermodynamics. Explore the laws of motion through interactive diagrams and exercises.",
    pdfUrl: "https://www.cte.iup.edu/cte/Resources/PDF_TestPage.pdf", //"https://www.africau.edu/images/default/sample.pdf",
    grade: "Grade 10",
    subject: "Physics",
    worksheetSkills: [{ name: "Mechanics" }, { name: "Thermodynamics" }],
  },
];

const SUBJECTS = [
  "Math",
  "English Language Arts",
  "Science",
  "Social Studies",
  "Foreign Language",
];
const GRADES = ["Pre-K", "K", "1st", "2nd", "3rd", "4th", "5th"];

export default function WorkSheetLibrary() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null); // New State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // 1. Get unique skills based on Selected Subject and Grade
  const availableSkills = useMemo(() => {
    if (!selectedSubject || !selectedGrade) return [];

    const skills = new Set<string>();
    workSheets.forEach((workSheet) => {
      if (
        workSheet.subject === selectedSubject &&
        workSheet.grade === selectedGrade
      ) {
        workSheet.worksheetSkills.forEach((skill) => skills.add(skill.name));
      }
    });
    return Array.from(skills);
  }, [selectedSubject, selectedGrade]);

  // 2. Filter Worksheet Data including the Skill filter
  const filteredWorkSheet = useMemo(() => {
    return workSheets.filter((item) => {
      const matchSubject = !selectedSubject || item.subject === selectedSubject;
      const matchGrade = !selectedGrade || item.grade === selectedGrade;
      const matchSkill =
        !selectedSkill ||
        item.worksheetSkills.some((s) => s.name === selectedSkill);
      return matchSubject && matchGrade && matchSkill;
    });
  }, [selectedSubject, selectedGrade, selectedSkill]);

  // Reset skill if it's no longer available when subject/grade changes
  useEffect(() => {
    if (selectedSkill && !availableSkills.includes(selectedSkill)) {
      setSelectedSkill(null);
    }
  }, [availableSkills, selectedSkill]);

  const totalPages = Math.ceil(filteredWorkSheet.length / itemsPerPage);
  const currentData = filteredWorkSheet.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const removeFilter = (type: "subject" | "grade" | "skill") => {
    if (type === "subject") setSelectedSubject(null);
    if (type === "grade") setSelectedGrade(null);
    if (type === "skill") setSelectedSkill(null);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* LEFT SIDEBAR - FILTERS */}
      <aside className="w-full md:w-64 p-6 border-r border-gray-100">
        {/* Subject Filter */}
        <div className="mb-8">
          <h3 className="font-bold text-slate-700 mb-4">Subjects</h3>
          {/* ... (Your existing Subject radio mapping) ... */}
          <div className="space-y-3">
            {SUBJECTS.map((sub) => (
              <label
                key={sub}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="subject"
                  checked={selectedSubject === sub}
                  onChange={() => {
                    setSelectedSubject(sub);
                    setCurrentPage(1);
                  }}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span
                  className={`text-sm ${selectedSubject === sub ? "text-[var(--grape-purple)] font-bold" : "text-slate-800"}`}
                >
                  {sub}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Grade Filter */}
        <div className="mb-8">
          <h3 className="font-bold text-slate-700 mb-4">Grade Level</h3>
          <div className="grid grid-cols-2 gap-2">
            {GRADES.map((grade) => (
              <button
                key={grade}
                onClick={() => {
                  setSelectedGrade(grade);
                  setCurrentPage(1);
                }}
                className={`py-2 text-xs font-medium rounded-md border transition-all ${
                  selectedGrade === grade
                    ? "bg-[var(--leaf-green)] border-white text-white"
                    : "bg-white border-gray-200 text-slate-800 hover:border-gray-400"
                }`}
              >
                {grade}
              </button>
            ))}
          </div>
        </div>

        {/* NEW: Worksheet Skills Filter - Only shows when both selected */}
        {selectedSubject && selectedGrade && availableSkills.length > 0 && (
          <div className="animate-in fade-in slide-in-from-left-2 duration-300">
            <h3 className="font-bold text-slate-700 mb-4">Worksheet Skills</h3>
            <div className="flex flex-col gap-2">
              {availableSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => {
                    setSelectedSkill(skill);
                    setCurrentPage(1);
                  }}
                  className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                    selectedSkill === skill
                      ? "bg-blue-100 text-blue-700 font-bold"
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
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-slate-800 mb-2">
            {selectedSubject || "All Resources"}
          </h1>
          <p className="text-slate-400 mb-6">
            {filteredWorkSheet.length} results
          </p>

          {/* ACTIVE FILTER CHIPS */}
          <div className="flex flex-wrap gap-2 mb-8">
            {selectedSubject && (
              <Chip
                label={selectedSubject}
                variant="filter"
                color="var(--grape-purple)"
                onRemove={() => removeFilter("subject")}
              />
            )}
            {selectedGrade && (
              <Chip
                label={selectedGrade}
                variant="filter"
                color="var(--leaf-green)"
                onRemove={() => removeFilter("grade")}
              />
            )}
            {selectedSkill && (
              <Chip
                label={selectedSkill}
                variant="filter"
                color="#3b82f6"
                onRemove={() => removeFilter("skill")}
              />
            )}

            {(selectedSubject || selectedGrade || selectedSkill) && (
              <button
                onClick={() => {
                  setSelectedSubject(null);
                  setSelectedGrade(null);
                  setSelectedSkill(null);
                  setCurrentPage(1);
                }}
                className="text-blue-600 text-sm font-medium hover:underline ml-2"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentData.map((res) => (
              <PdfCard key={res.id} {...res} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </main>
    </div>
  );
}
