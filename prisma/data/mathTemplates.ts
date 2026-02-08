import { TemplateType, DifficultyLevel, QuestionFormat } from "@prisma/client";
export const mathTemplates = [
  // -----------------------------------------------------
  // ADDITION
  // -----------------------------------------------------
  {
    categories: "Addition",
    skills: [
      {
        name: ["Add with pictures up to 5", "Add with pictures up to 10"],
        templates: [
          {
            template: "Look at the pictures: {pictures}. How many in all?",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template: "Count the objects: {countA} + {countB} = ___",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.FILL_BLANK,
          },
          {
            template: "True or false: {countA} + {countB} = {c}.",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.TRUE_FALSE,
          },
          {
            template: "Match each picture set to its total. {pairs}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.MATCHING,
          },
          {
            template: "{picturesA} + {picturesB} = ___",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.FILL_BLANK,
          },
        ],
      },
      {
        name: ["Add within 20", "Add within 100", "Add within 1,000"],
        templates: [
          {
            template: "What is {a} + {b}?",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template: "Solve: {a} + {b}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.FILL_BLANK,
          },
          {
            template: "True or false: {a} + {b} = {c}.",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.TRUE_FALSE,
          },
        ],
      },
      {
        name: [
          "Addition word problems within 20",
          "Addition word problems within 100",
        ],
        templates: [
          {
            template:
              "{name} has {a} items. {name2} gives {b} more. How many items are there now?",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template:
              "{name} found {a} shells on the beach and later found {b} more. How many shells in total? ___",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.FILL_BLANK,
          },
          {
            template:
              "True or false: If {name} has {a} apples and buys {b} more, the total is {c}.",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.TRUE_FALSE,
          },
          {
            template:
              "Match each story to the correct addition equation. {pairs}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.MATCHING,
          },
          {
            template:
              "{name} collected {a} stickers in the morning and {b} stickers in the afternoon. How many stickers did {name} collect in all?",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template:
              "The table shows how many items {name} collected. Morning: {a}. Evening: {b}. How many in total?",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.MCQ,
          },
        ],
      },
    ],
  },
  // -----------------------------------------------------
  // Subtraction
  // -----------------------------------------------------
  {
    categories: "Subtraction",
    skills: [
      {
        name: [
          "Subtract with pictures up to 5",
          "Subtract with pictures up to 10",
          "Subtraction sentences up to 10",
          "Subtract using number lines to 10",
        ],
        templates: [
          {
            template: "What is {a} - {b}?",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template: "Solve: {a} - {b}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.FILL_BLANK,
          },
          {
            template: "True or false: {a} - {b} = {c}.",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.TRUE_FALSE,
          },
          {
            template:
              "Match each subtraction expression to its answer. {pairs}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.MATCHING,
          },
        ],
      },
    ],
  },
  // -----------------------------------------------------
  // MULTIPLICATION
  // -----------------------------------------------------
  {
    categories: "Multiplication",
    skills: [
      {
        name: [
          "Understand multiplication as repeated addition",
          "Multiplication facts up to 10 × 10",
          "Multiply with arrays",
          "Multiplication word problems",
          "Understand multiplication as repeated addition",
          "Multiplication facts up to 10 × 10",
          "Multiply with arrays",
          "Multiplication word problems",
        ],
        templates: [
          {
            template: "What is {a} × {b}?",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template: "Solve: {a} × {b}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.FILL_BLANK,
          },
          {
            template: "True or false: {a} × {b} = {c}.",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.TRUE_FALSE,
          },
          {
            template: "Match each multiplication fact to its product. {pairs}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.HARD,
            questionFormat: QuestionFormat.MATCHING,
          },
        ],
      },
    ],
  },
  // -----------------------------------------------------
  // DIVISION
  // -----------------------------------------------------
  {
    categories: "Division",
    skills: [
      {
        name: [
          "Understand division as equal sharing",
          "Division facts up to 100",
          "Relate multiplication and division",
          "Division word problems",
        ],
        templates: [
          {
            template: "What is {a} ÷ {b}?",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template: "Solve: {a} ÷ {b}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.FILL_BLANK,
          },
          {
            template: "True or false: {a} ÷ {b} = {c}.",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.TRUE_FALSE,
          },
          {
            template: "Match each division fact to its quotient. {pairs}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.HARD,
            questionFormat: QuestionFormat.MATCHING,
          },
        ],
      },
    ],
  },
  // -----------------------------
  // Counting and number sense TEMPLATES
  // -----------------------------
  {
    categories: "Counting and number sense",
    skills: [
      {
        name: [
          "Count to 3",
          "Count to 5",
          "Count to 10",
          "Count objects in a line",
          "Count objects in a scattered set",
          "Identify numbers 0 to 5",
          "Identify numbers 0 to 10",
          "Match numbers to quantities",
        ],
        templates: [
          {
            template: "How many objects are shown? {image}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template: "Count the objects and write the number: {image}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.FILL_BLANK,
          },
          {
            template: "Which number represents the quantity {n}?",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template: "True or false: The picture shows {n} objects.",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.TRUE_FALSE,
          },
          {
            template:
              "Match each number to the correct group of objects. {pairs}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.MATCHING,
          },
        ],
      },
    ],
  },
  // -----------------------------
  // COMPARING TEMPLATES
  // -----------------------------
  {
    categories: "Comparing",
    skills: [
      {
        name: [
          "More and fewer",
          "Same number of objects",
          "Compare up to 5 objects",
          "Compare up to 10 objects",
        ],
        templates: [
          {
            template: "Which number is greater: {a} or {b}?",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template: "Which group has more objects? {imageA} vs {imageB}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template: "Fill in the blank: {a} __ {b}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.FILL_BLANK,
          },
          {
            template: "True or false: {a} is greater than {b}.",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.TRUE_FALSE,
          },
          {
            template: "Match each number to 'greater' or 'smaller'. {pairs}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.MATCHING,
          },
          {
            template: "Which number is larger? {a}, {b}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template: "Which number is the largest? {a}, {b}, {c}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template: "Which number is smaller? {a}, {b}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.EASY,
            questionFormat: QuestionFormat.MCQ,
          },
          {
            template: "Which number is the smallest? {a}, {b}, {c}",
            type: TemplateType.MATH_NUMERIC,
            difficulty: DifficultyLevel.MEDIUM,
            questionFormat: QuestionFormat.MCQ,
          },
        ],
      },
    ],
  },
];
