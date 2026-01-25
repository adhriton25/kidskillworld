import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-blue-600 py-3 mt-4">
      <div className="mx-auto text-center text-white space-y-2">
        <h3 className="text-xl font-bold">{process.env.NEXT_PUBLIC_BRAND_NAME}</h3>
        <p className="text-white/80">Learning made fun for every child</p>
        <p className="text-white/60 text-sm">© 2026 {process.env.NEXT_PUBLIC_BRAND_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
};
