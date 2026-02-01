
  import { TemplateType, DifficultyLevel, QuestionFormat } from "@prisma/client";
  export const mathTemplates = [
    // -----------------------------------------------------
    // ADDITION
    // -----------------------------------------------------
    {
      template: "What is {a} + {b}?",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Addition"],
    },
    {
      template: "Solve: {a} + {b}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.FILL_BLANK,
      categories: ["Addition"],
    },
    {
      template: "True or false: {a} + {b} = {c}.",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.TRUE_FALSE,
      categories: ["Addition"],
    },
    {
      template: "Match each addition expression to its answer. {pairs}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.MATCHING,
      categories: ["Addition"],
    },

    // -----------------------------------------------------
    // SUBTRACTION
    // -----------------------------------------------------
    {
      template: "What is {a} - {b}?",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Subtraction"],
    },
    {
      template: "Solve: {a} - {b}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.FILL_BLANK,
      categories: ["Subtraction"],
    },
    {
      template: "True or false: {a} - {b} = {c}.",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.TRUE_FALSE,
      categories: ["Subtraction"],
    },
    {
      template: "Match each subtraction expression to its answer. {pairs}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.MATCHING,
      categories: ["Subtraction"],
    },

    // -----------------------------------------------------
    // MULTIPLICATION
    // -----------------------------------------------------
    {
      template: "What is {a} × {b}?",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Multiplication", "Multiplication and division"],
    },
    {
      template: "Solve: {a} × {b}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.FILL_BLANK,
      categories: ["Multiplication"],
    },
    {
      template: "True or false: {a} × {b} = {c}.",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.TRUE_FALSE,
      categories: ["Multiplication"],
    },
    {
      template: "Match each multiplication fact to its product. {pairs}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.HARD,
      questionFormat: QuestionFormat.MATCHING,
      categories: ["Multiplication"],
    },

    // -----------------------------------------------------
    // DIVISION
    // -----------------------------------------------------
    {
      template: "What is {a} ÷ {b}?",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Division", "Multiplication and division"],
    },
    {
      template: "Solve: {a} ÷ {b}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.FILL_BLANK,
      categories: ["Division"],
    },
    {
      template: "True or false: {a} ÷ {b} = {c}.",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.TRUE_FALSE,
      categories: ["Division"],
    },
    {
      template: "Match each division fact to its quotient. {pairs}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.HARD,
      questionFormat: QuestionFormat.MATCHING,
      categories: ["Division"],
    },

    // -----------------------------------------------------
    // MIXED OPERATIONS
    // -----------------------------------------------------
    {
      template: "Which expression has the greatest value? {exprA}, {exprB}, {exprC}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.HARD,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Mixed operations"],
    },
    {
      template: "Solve the expression: {expression}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.FILL_BLANK,
      categories: ["Mixed operations"],
    },
   
    // -----------------------------
    // Counting and number sense TEMPLATES
    // -----------------------------
    {
      template: "How many objects are shown? {image}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Counting and number sense"],
    },
    {
      template: "Count the objects and write the number: {image}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.FILL_BLANK,
      categories: ["Counting and number sense"],
    },
    {
      template: "Which number represents the quantity {n}?",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Counting and number sense"],
    },
    {
      template: "True or false: The picture shows {n} objects.",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.TRUE_FALSE,
      categories: ["Counting and number sense"],
    },
    {
      template: "Match each number to the correct group of objects. {pairs}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.MATCHING,
      categories: ["Counting and number sense"],
    },
    // -----------------------------
    // COMPARING TEMPLATES
    // -----------------------------
    {
      template: "Which number is greater: {a} or {b}?",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Comparing"],
    },
    {
      template: "Which group has more objects? {imageA} vs {imageB}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Comparing"],
    },
    {
      template: "Fill in the blank: {a} __ {b}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.FILL_BLANK,
      categories: ["Comparing"],
    },
    {
      template: "True or false: {a} is greater than {b}.",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.TRUE_FALSE,
      categories: ["Comparing"],
    },
    {
      template: "Match each number to 'greater' or 'smaller'. {pairs}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.MATCHING,
      categories: ["Comparing"],
    },
    {
      template: "Which number is larger? {a}, {b}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Comparing"],
    },
    {
      template: "Which number is the largest? {a}, {b}, {c}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Comparing"],
    },
    {
      template: "Which number is smaller? {a}, {b}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.EASY,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Comparing"],
    },
    {
      template: "Which number is the smallest? {a}, {b}, {c}",
      type: TemplateType.MATH_NUMERIC,
      difficulty: DifficultyLevel.MEDIUM,
      questionFormat: QuestionFormat.MCQ,
      categories: ["Comparing"],
    },
  ];