export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2023—2025",
    institution: "Columbia University",
    degree: "M.S. in Data Science",
  },
  {
    year: "2018—2022",
    institution: "Indian Institute of Technology, Kharagpur",
    degree: "B.Tech in Electronics and Electrical Communication Engineering",
  }
];
