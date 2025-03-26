import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 mt-1">{education.year}</span>
        <div className="col-span-3">
          <h3 className="text-base mb-1 font-serif">{education.institution}</h3>
          <p className="text-sm text-zinc-600">{education.degree}</p>
          {education.courses && education.courses.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {education.courses.map((course, index) => (
                <span
                  key={index}
                  className="text-xs text-zinc-600 px-2 py-1 bg-zinc-50 rounded-md"
                >
                  {course}
                </span>
              ))}
            </div>
          )}
          {education.thesis && (
            <p className="text-sm text-zinc-500 mt-2 italic">
              Thesis:{" "}
              {education.thesisUrl ? (
                <a
                  href={education.thesisUrl}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {education.thesis}
                </a>
              ) : (
                education.thesis
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
