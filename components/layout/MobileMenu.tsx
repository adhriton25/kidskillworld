"use client";
import React from "react";
import { X } from "lucide-react";

export const MobileMenu = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/40 z-50 transition-opacity ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-blue-600">Menu</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="space-y-4 text-lg font-semibold">
          <a className="block text-blue-600">Home</a>
          <a className="block text-blue-600">Subjects</a>
          <a className="block text-blue-600">Grades</a>
          <a className="block text-blue-600">Worksheets</a>
          <a className="block text-blue-600">About</a>
        </nav>
      </div>
    </div>
  );
};
