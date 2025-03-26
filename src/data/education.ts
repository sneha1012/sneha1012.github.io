export interface Education {
  year: string;
  institution: string;
  degree: string;
  courses?: string[];
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—2025",
    institution: "Columbia University",
    degree: "M.S. in Data Science",
    courses: [
      "Applied DL",
      "ML for DS",
      "Advanced Speech Processing",
      "NLP",
      "Data Visualization",
      "Financial Structuring",
      "Statistical Inference"
    ],
  },
  {
    year: "2020-2024",
    institution: "SRM Institute of Science and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    courses: [
      "Operating Systems",
      "DBMS",
      "Project Management",
      "Algorithms"
    ]
  },
];
