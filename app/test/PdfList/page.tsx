// components/modules/ResourceGallery.tsx
import { PdfCard } from '@/components/common/PDF/PdfCard';
import React from 'react';
    

// Sample data following your Prisma schema structure
const sampleResources = [
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

export default function ResourceGallery() {
  return (
    <section className="min-h-screen bg-slate-50 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">
            Learning Resources
          </h1>
          <p className="text-slate-500">
            Explore our collection of interactive worksheets and PDF guides.
          </p>
        </header>

        {/* Grid layout to display the reusable components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sampleResources.map((resource) => (
            <PdfCard 
              key={resource.id} 
              {...resource} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}