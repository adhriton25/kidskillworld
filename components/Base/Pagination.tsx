"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPaginationRange } from "@/lib/pagination-utils";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) => {
  const allPages = getPaginationRange(currentPage, totalPages);

  if (totalPages <= 1) return null;

  return (
    <nav
      className={cn("flex items-center justify-center gap-2 mt-12", className)}
    >
      {/* Previous Button */}
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        leftIcon={<ChevronLeft size={30} />}
        disabled={currentPage === 1}
        variant="secondary"
        isLinkButton
      ></Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {allPages.map((page, index) => {
          if (page === "...") {
            return (
              <span key={`dots-${index}`} className="px-3 py-2 text-gray-400">
                ...
              </span>
            );
          }

          const pageNum = page as number;
          return (
            <Button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              isLinkButton={currentPage === pageNum ?  false: true}
              variant="primary" 
              className="!px-5"
              showUnderline
            >
              {pageNum}
            </Button>
          );
        })}
      </div>

      {/* Next Button */}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        leftIcon={ <ChevronRight size={30} />}
        variant="secondary"
        isLinkButton
      >
      </Button>
    </nav>
  );
};
