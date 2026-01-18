'use client';

import { useEffect, useState } from 'react';

type Grade = { id: number; name: string };
type Subject = { id: number; name: string };
type Skill = { id: number; name: string };

export default function AdminWorksheetsPage() {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [gradeId, setGradeId] = useState<number | ''>('');
  const [subjectId, setSubjectId] = useState<number | ''>('');
  const [selectedSkillIds, setSelectedSkillIds] = useState<number[]>([]);
  const [worksheets, setWorksheets] = useState<any[]>([]);

  useEffect(() => {
    // fetch lookup data
    const load = async () => {
      const [gradesRes, subjectsRes, skillsRes, worksheetsRes] = await Promise.all([
        fetch('/api/grades'),
        fetch('/api/subjects'),
        fetch('/api/skills'),
        fetch('/api/worksheets'),
      ]);

      setGrades(await gradesRes.json());
      setSubjects(await subjectsRes.json());
      setSkills(await skillsRes.json());
      setWorksheets(await worksheetsRes.json());
    };

    load();
  }, []);

  const toggleSkill = (id: number) => {
    setSelectedSkillIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/worksheets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        pdfUrl,
        gradeId: Number(gradeId),
        subjectId: Number(subjectId),
        skillIds: selectedSkillIds,
      }),
    });

    if (res.ok) {
      const created = await res.json();
      setWorksheets((prev) => [created, ...prev]);
      setTitle('');
      setDescription('');
      setPdfUrl('');
      setGradeId('');
      setSubjectId('');
      setSelectedSkillIds([]);
    } else {
      console.error('Failed to create worksheet');
    }
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Admin – Worksheets</h1>

      {/* Create form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl border rounded-lg p-4 bg-white">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            className="w-full border rounded px-3 py-2 text-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full border rounded px-3 py-2 text-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">PDF URL</label>
          <input
            className="w-full border rounded px-3 py-2 text-sm"
            value={pdfUrl}
            onChange={(e) => setPdfUrl(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Grade</label>
            <select
              className="w-full border rounded px-3 py-2 text-sm"
              value={gradeId}
              onChange={(e) => setGradeId(Number(e.target.value))}
              required
            >
              <option value="">Select grade</option>
              {grades.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <select
              className="w-full border rounded px-3 py-2 text-sm"
              value={subjectId}
              onChange={(e) => setSubjectId(Number(e.target.value))}
              required
            >
              <option value="">Select subject</option>
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <span className="block text-sm font-medium mb-1">Skills</span>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <button
                key={skill.id}
                type="button"
                onClick={() => toggleSkill(skill.id)}
                className={`px-3 py-1 rounded-full text-xs border ${
                  selectedSkillIds.includes(skill.id)
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                {skill.name}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
        >
          Save Worksheet
        </button>
      </form>

      {/* List existing worksheets */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Existing Worksheets</h2>
        <div className="space-y-2">
          {worksheets.map((w) => (
            <div
              key={w.id}
              className="border rounded-lg p-3 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="font-semibold text-sm">{w.title}</div>
                <div className="text-xs text-gray-500">
                  {w.grade?.name} • {w.subject?.name}
                </div>
              </div>
              <a
                href={w.pdfUrl}
                target="_blank"
                className="mt-2 sm:mt-0 text-xs text-blue-600 hover:underline"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
