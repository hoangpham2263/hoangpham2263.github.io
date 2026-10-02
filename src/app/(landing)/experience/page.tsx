import { experiencesConfig } from "@/config/experience.config";
import type { Experience as ExperienceType } from "@/types";

export default function ExperiencePage() {
  return (
    <div className="w-full max-w-5xl mt-10 relative border-l-2 border-muted-foreground/20 ml-1.5 pl-6 space-y-10">
      {experiencesConfig.map((exp, i) => (
        <div key={i} className="relative">
          <span
            aria-hidden="true"
            className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 ${
              exp.end === "Present" ? "bg-primary border-primary" : "bg-background border-muted-foreground/50"
            }`}
          />
          <Experience experience={exp} />
        </div>
      ))}
      <div className="relative">
        <span aria-hidden="true" className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 bg-background border-muted-foreground/50" />
        <div className="flex justify-between flex-wrap">
          <span className="font-semibold font-heading text-lg">Duy Tan University</span>
          <p className="text-muted-foreground text-xs">2021 - 2025</p>
        </div>
        <p className="tracking-tight">Bachelor in Software Engineering</p>
      </div>
    </div>
  );
}

const Experience = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div>
      <div className="flex justify-between flex-wrap">
        <div className="font-semibold flex flex-wrap items-center gap-1 md:gap-2">
          {experience.company.url ? (
            <a
              href={experience.company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-heading text-lg"
            >
              {experience.company.name}
            </a>
          ) : (
            <span className="font-heading text-lg">{experience.company.name}</span>
          )}
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            {experience.employmentType}
          </span>
          <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
            {experience.location.name}
          </span>
        </div>
        <p className="text-muted-foreground text-xs">
          {experience.start} - {experience.end}
        </p>
      </div>
      <p className="tracking-tight">{experience.title}</p>
      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
        {experience.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
      {experience.achievement && (
        <p className="mt-2 text-sm font-medium text-primary">
          Achievement: {experience.achievement}
        </p>
      )}
    </div>
  );
};
