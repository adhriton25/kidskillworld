import { TemplateType, DifficultyLevel, QuestionFormat} from "@prisma/client";

export const englishTemplates = [
  {
    template: "Choose the correct meaning of the word '{word}'.",
    type: TemplateType.ENGLISH_VOCAB,
    difficulty: DifficultyLevel.EASY,
    questionFormat: QuestionFormat.MCQ,
    categories: ["Vocabulary", "Word study"],
  },
  {
    template: "Choose the sentence that uses the verb correctly.",
    type: TemplateType.ENGLISH_GRAMMAR,
    difficulty: DifficultyLevel.MEDIUM,
    questionFormat: QuestionFormat.MCQ,
    categories: ["Grammar and mechanics"],
  },
  {
    template: "Read the passage and answer the question: {passage}",
    type: TemplateType.ENGLISH_READING,
    difficulty: DifficultyLevel.MEDIUM,
    questionFormat: QuestionFormat.MCQ,
    categories: ["Reading comprehension"],
  },
];
