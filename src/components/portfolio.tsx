import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import RAGDiagram from "./RAGDiagram";

export default function Portfolio() {
  return (
    <div className="space-y-8">
      {portfolioData.map((project, index) => (
        <div key={index} className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <div className="flex space-x-4">
              {project.projectUrl && (
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Demo
                </Link>
              )}
              {project.codeUrl && (
                <Link
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  GitHub
                </Link>
              )}
            </div>
          </div>
          <p className="text-gray-600">{project.description}</p>
          {project.technologies && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          {project.imageUrl && (
            <div className="relative w-full h-64">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          {project.title === "Doc-Query Assistant" && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">System Architecture</h4>
              <RAGDiagram />
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 