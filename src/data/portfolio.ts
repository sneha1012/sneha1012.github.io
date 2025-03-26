export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Doc-Query Assistant",
    description: "Developed a RAG-based document analysis system with Streamlit UI, implementing document processing pipeline using LangChain and ChromaDB.",
    technologies: ["Python", "LangChain", "Streamlit", "Ollama"],
    imageUrl: "/images/RAG.png",
    projectUrl: "https://github.com/sneha1012/Doc-Query",
    codeUrl: "https://github.com/sneha1012/Doc-Query",
  },
  {
    title: "Visual Question Answering",
    description: "Enhanced OpenAI's CLIP model with custom linear layer for VQA, implementing audio-based answer generation system. Deployed using Docker and Flask for scalable web application.",
    technologies: ["PyTorch", "Flask", "CLIP", "Docker"],
    imageUrl: "/images/CLIP.png",
    projectUrl: "https://github.com/sneha1012/SeeQA",
    codeUrl: "https://github.com/sneha1012/SeeQA",
  },
  {
    title: "Global Migration Insights",
    description: "Built interactive data visualization platform analyzing global migration patterns using D3.js and R. Implemented dynamic choropleth maps, parallel coordinates plots, and statistical analysis dashboards for migration trends.",
    technologies: ["D3.js", "R", "Quarto", "Data Analysis"],
    imageUrl: "/images/EDAV.png",
    projectUrl: "https://sneha1012.github.io/EDAV-FINAL-PROJECT/results.html",
    codeUrl: "https://github.com/sneha1012/EDAV-FINAL-PROJECT",
  },
  {
    title: "Gesturize",
    description: "Real-time hand gesture control system using MediaPipe and TensorFlow, featuring custom MLP model for gesture recognition.",
    technologies: ["TensorFlow", "MediaPipe", "OpenCV", "Python"],
    imageUrl: "/images/Gesturise.gif",
    codeUrl: "https://github.com/sneha1012/gesturise",
  },
  {
    title: "Content Engagement Analyzer",
    description: "Reddit content analysis system combining sentiment analysis with engagement forecasting to predict post performance.",
    technologies: ["PyTorch", "Word2Vec", "Prophet", "NLP"],
    imageUrl: "/images/Reddit.png",
    codeUrl: "https://github.com/sneha1012/Reddit_Post_Analysis",
  },
];
