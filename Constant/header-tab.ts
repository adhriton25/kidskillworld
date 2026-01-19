export const HEADER_TABS = [
  {
    id: "home",
    label: "Home",
    href: "/",
    showSubjectTabs: false,
  },
  {
    id: "learning",
    label: "Learning",
    href: "/learning",
    showSubjectTabs: true, // ⭐ Only this tab shows SubjectTabs
  },
  {
    id: "grades",
    label: "Grades",
    href: "/grades",
    showSubjectTabs: false,
  },
  {
    id: "worksheets",
    label: "Worksheets",
    href: "/worksheets",
    showSubjectTabs: false,
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    showSubjectTabs: false,
  },
] as const;
