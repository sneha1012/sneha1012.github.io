export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Summer 2025",
    title: "Data Science Intern",
    company: "NXP Semiconductors",
    description: "Classifying EMS log-based downtime using fuzzy logic, topic modeling, and GenAI prompts; developed an ingestion pipeline for 8D and Kaizen reports using Python and Dataiku to support analytics at NXP’s fab systems.",
    Manager: "Ivan Belen",
    companyUrl: "https://www.nxp.com",
  },
  {
    date: "Spring 2025",
    title: "Research Assistant",
    company: "Columbia Business School",
    description: "Developing and Deploying RAG-based ESG analytics using VLM (Qwen 2.5) and VidoRAG for corporate sustainability reports",
    advisor: "Thomas Bourveau",
    companyUrl: "https://business.columbia.edu/faculty/divisions/accounting",
  },
  {
    date: "Spring 2025",
    title: "Teaching Assistant",
    company: "Columbia Business School",
    description: "Facilitated course management for Python for MBAs and Databases & Business Analytics.",
    advisor: "Mattan Griffel",
    companyUrl: "https://www.mattangriffel.com",
  },
  {
    date: "Summer 2024",
    title: "Data Science Intern",
    company: "Metropolis Healthcare",
    description: "Developed ML-powered medical report analysis system with GPT-4 and AWS deployment and automated KPI dashboards",
    manager: "Karanvir Vij",
    companyUrl: "https://www.metropolisindia.com",
  },
  {
    date: "Winter 2023",
    title: "Research Intern",
    company: "Xu Lab, CMU",
    description: "Research on joint particle picking and 3D orientation estimation for cryo-ET subtomograms using GUM-net",
    advisor: "Mostofa Rafid Uddin",
    companyUrl: "https://www.cs.cmu.edu/~minxu/",
  },
  {
    date: "Summer 2023",
    title: "Research Intern",
    company: "National University of Singapore",
    description: "Led development of computer vision system for kitchen safety monitoring using YOLOv8 and automated alert system",
    advisor: "Dr. Manoranjan Dash",
    companyUrl: "https://www.cs.nus.edu.sg/home/manoranjan/",
  },
];
