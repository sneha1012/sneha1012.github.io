'use client';

import { useEffect } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: 'basis'
  }
});

export default function RAGDiagram() {
  useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      <div className="mermaid">
        {`
          graph LR
            A[Document Input] -->|PDF/Markdown| B[Document Processing]
            B -->|Text Extraction| C[Embedding Generation]
            C -->|Ollama| D[Vector Storage]
            D -->|ChromaDB| E[Query Processing]
            E -->|LangChain| F[Response Generation]
            F -->|Streamlit UI| G[User Interface]
            
            style A fill:#f9f,stroke:#333,stroke-width:2px
            style B fill:#bbf,stroke:#333,stroke-width:2px
            style C fill:#bbf,stroke:#333,stroke-width:2px
            style D fill:#bbf,stroke:#333,stroke-width:2px
            style E fill:#bbf,stroke:#333,stroke-width:2px
            style F fill:#bbf,stroke:#333,stroke-width:2px
            style G fill:#f9f,stroke:#333,stroke-width:2px
        `}
      </div>
    </div>
  );
} 