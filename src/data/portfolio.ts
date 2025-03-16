export interface Portfolio {
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  videoUrl?: string;
  blogUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Doc-Query",
    description: "A locally-hosted platform for document analysis and question-answering using Large Language Models (LLMs) with Retrieval-Augmented Generation (RAG).",
    codeUrl: "https://github.com/sneha1012/Doc-Query",
  },
  {
    title: "SeeQA",
    description: "A deep learning model with a web application to answer image-based questions using a non-generative approach, built on top of OpenAI's CLIP model.",
    codeUrl: "https://github.com/sneha1012/SeeQA",
  },
  {
    title: "Intelligent Kitchen Aid",
    description: "An AI-powered system for visually impaired users, integrating YOLO for object detection and text-to-speech for real-time kitchen assistance.",
    codeUrl: "https://github.com/sneha1012/Intelligent-Kitchen-Aid-for-the-Visually-Impaired",
  },
  {
    title: "LLM from Scratch",
    description: "Implementation of a Large Language Model from scratch using PyTorch, demonstrating deep understanding of transformer architecture and NLP concepts.",
    codeUrl: "https://github.com/sneha1012/llm-scratch",
  },
  {
    title: "Fitify",
    description: "An all-in-one wellness application featuring meditation guidance, personalized diet planning, and an e-commerce platform for fitness products.",
    codeUrl: "https://github.com/sneha1012/Fitify",
  }
];
