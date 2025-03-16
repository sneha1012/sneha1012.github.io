export interface Experience {
  year: string;
  role: string;
  company: string;
  description?: string;
  url?: string;
}

export const experienceData: Experience[] = [
  {
    year: "2023—Present",
    role: "Graduate Research Assistant",
    company: "Columbia Business School",
    description: "Conducting research in Natural Language Processing and Large Language Models.",
    url: "https://www8.gsb.columbia.edu/",
  },
  {
    year: "2023—Present",
    role: "Teaching Assistant II",
    company: "Columbia Business School",
    description: "Teaching Assistant for Business Analytics II course, focusing on machine learning applications in business.",
    url: "https://www8.gsb.columbia.edu/",
  },
  {
    year: "2023",
    role: "Data Science Intern",
    company: "Metropolis Healthcare",
    description: "Developed ML models for healthcare analytics and process optimization.",
  },
  {
    year: "2022",
    role: "Deep Learning Intern",
    company: "National University of Singapore",
    description: "Researched and implemented deep learning models for computer vision applications.",
    url: "https://www.nus.edu.sg/",
  },
  {
    year: "2021",
    role: "NLP Researcher",
    company: "Indian Institute of Technology, Kharagpur",
    description: "Conducted research in Natural Language Processing and developed innovative solutions.",
    url: "http://www.iitkgp.ac.in/",
  },
  {
    year: "2021",
    role: "Research Intern",
    company: "Carnegie Mellon University",
    description: "Worked on research projects in machine learning and data science.",
    url: "https://www.cmu.edu/",
  },
];
