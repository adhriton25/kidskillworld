"use client";
import React from "react";
import { SUBJECT_LIST } from "@/Constant/subjects";
import { Button } from "../Base/Button";

export const SubjectTabs = () => {
  return (
    <div className="flex gap-4 overflow-x-auto py-3 px-4 bg-white shadow rounded-xl">
      {SUBJECT_LIST.map((tab) => (
        <>
          <Button variant="secondary" shape="rounded" leftIcon={tab.icon}>
            {tab.name}
          </Button>
        </>
      ))}
    </div>
  );
};
