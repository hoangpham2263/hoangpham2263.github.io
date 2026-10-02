import { experiencesConfig } from "@/config/experience.config";
import type { Experience as ExperienceType } from "@/types";

export default function ExperiencePage() {
  return (
    <div className="w-full max-w-5xl mt-6 divide-y divide-border">
      {experiencesConfig.map((exp, i) => (
        <div key={i} className="py-7 first:pt-4">
          <Experience experience={exp} />
        </div>
      ))}
      <div className="py-7">
        <p className="text-xs font-medium uppercase tracking-wider text-foreground/60 mb-3">Education</p>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="font-semibold font-heading text-lg">Duy Tan University</span>
          <p className="text-sm text-foreground/70">2021 - 2025</p>
        </div>
        <p className="mt-1 text-[15px] font-medium text-foreground/90">Bachelor in Software Engineering</p>
      </div>
    </div>
  );
}

const Experience = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {experience.company.url ? (
            <a
              href={experience.company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-heading font-semibold text-lg"
            >
              {experience.company.name}
            </a>
          ) : (
            <span className="font-heading font-semibold text-lg">{experience.company.name}</span>
          )}
          <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded cursor-default">
            {experience.employmentType}
          </span>
          <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded cursor-default">
            {experience.location.name}
          </span>
          {experience.end === "Present" && (
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-primary text-primary-foreground cursor-default">Current</span>
          )}
        </div>
        <p className="text-sm text-foreground/70">
          {experience.start} - {experience.end}
        </p>
      </div>
      <p className="mt-1 text-[15px] font-medium text-foreground/90">{experience.title}</p>
      <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-foreground/80 space-y-1.5">
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
