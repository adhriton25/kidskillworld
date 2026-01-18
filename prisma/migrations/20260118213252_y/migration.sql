-- CreateIndex
CREATE INDEX "Grade_name_idx" ON "Grade"("name");

-- CreateIndex
CREATE INDEX "Skill_gradeId_subjectId_idx" ON "Skill"("gradeId", "subjectId");

-- CreateIndex
CREATE INDEX "Subject_name_idx" ON "Subject"("name");

-- CreateIndex
CREATE INDEX "Worksheet_gradeId_idx" ON "Worksheet"("gradeId");

-- CreateIndex
CREATE INDEX "Worksheet_subjectId_idx" ON "Worksheet"("subjectId");
