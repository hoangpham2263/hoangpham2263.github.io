import { getEducation, getExperiences } from "@/config/localized";
import { getDictionary, type Locale } from "@/i18n";
import type { Experience as ExperienceType } from "@/types";

export default function ExperienceView({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const edu = getEducation(locale);
  return (
    <div className="w-full max-w-5xl mt-0 md:mt-6 divide-y divide-border">
      {getExperiences(locale).map((exp, i) => (
        <div key={i} className="py-7 first:pt-4">
          <Experience experience={exp} t={t.experience} />
        </div>
      ))}
      <div className="py-7">
        <p className="text-xs font-medium uppercase tracking-wider text-foreground/75 mb-3">{t.experience.education}</p>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="font-semibold font-heading text-lg">{edu.school}</span>
          <p className="text-sm text-foreground/85">{edu.period}</p>
        </div>
        <p className="mt-1 text-[15px] font-medium text-foreground/90">{edu.degree}</p>
      </div>
    </div>
  );
}

const Experience = ({
  experience,
  t,
}: {
  experience: ExperienceType;
  t: ReturnType<typeof getDictionary>["experience"];
}) => {
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
          {experience.location.name && (
            <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded cursor-default">
              {experience.location.name}
            </span>
          )}
          {experience.end === "Present" && (
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-primary text-primary-foreground cursor-default">{t.current}</span>
          )}
        </div>
        <p className="text-sm text-foreground/85">
          {experience.start} - {experience.end === "Present" ? t.present : experience.end}
        </p>
      </div>
      <p className="mt-1 text-[15px] font-medium text-foreground/90">{experience.title}</p>
      <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-foreground/85 space-y-1.5">
        {experience.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
      {experience.achievement && (
        <p className="mt-2 text-sm font-medium text-primary">
          {t.achievement}: {experience.achievement}
        </p>
      )}
    </div>
  );
};
