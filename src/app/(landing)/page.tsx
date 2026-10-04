"use client";

import React, { useMemo, useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/project/project-card";
import { ChevronDown, Star } from "lucide-react";
import { projects } from "#site/content";

const schema = z.object({
  query: z.string().min(1, "Search is required"),
  type: z.enum(["Featured", "Github"]).default("Featured"),
  sort: z.enum(["Last updated", "Stars"]).default("Stars"),
});

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [githubProjects, setGithubProjects] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      query: "",
      type: "Featured",
      sort: "Stars",
    },
  });

  const { query, type, sort } = form.watch();

  const fetchGithubRepos = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/github/repos', {
        next: {
          revalidate: 3600 // Cache for 1 hour
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const repos = await response.json();
      setGithubProjects(repos);
    } catch (error) {
      console.error("Failed to fetch GitHub repos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGithubRepos();
  }, [fetchGithubRepos]);

  const sortedFeaturedProjects = useMemo(() => {
    // Projects with a working live site come first, then newest first; sortLast ones go to the end
    return [...projects].sort(
      (a, b) =>
        Number(a.sortLast) - Number(b.sortLast) ||
        Number(b.links.length > 0) - Number(a.links.length > 0) ||
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  const sortedGithubProjects = useMemo(() => {
    return [...githubProjects].sort((a, b) => {
      if (sort === "Stars") {
        return b.stargazers_count - a.stargazers_count;
      }
      return (
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
    });
  }, [githubProjects, sort]);

  const filteredProjects = useMemo(() => {
    const lowercaseQuery = query.toLowerCase();
    const projectList =
      type === "Featured" ? sortedFeaturedProjects : sortedGithubProjects;

    return projectList.filter((project) => {
      const title = type === "Featured" ? project.title : project.name;
      const description = project.description || "";
      return (
        title.toLowerCase().includes(lowercaseQuery) ||
        description.toLowerCase().includes(lowercaseQuery)
      );
    });
  }, [type, query, sortedFeaturedProjects, sortedGithubProjects]);

  const renderProjects = useCallback(() => {
    if (loading && type === "Github") {
      return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
          {Array(12)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="w-full h-full min-h-[90px] rounded-md border bg-muted/50 animate-pulse"
              ></div>
            ))}
        </div>
      );
    }

    if (type === "Featured") {
      return filteredProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ));
    }

    return (
      <div className="w-full grid grid-cols-1  md:grid-cols-2 gap-3">
        {filteredProjects.map((repo, index) => (
          <GithubRepo key={index} repo={repo} />
        ))}
      </div>
    );
  }, [type, filteredProjects, loading]);

  return (
    <section className="w-full space-y-3 mt-3 md:space-y-6 md:mt-5">
      <Form {...form}>
        <form className="w-full flex items-center sticky top-[54px] z-20 rounded-lg border bg-background shadow-sm before:absolute before:inset-x-0 before:-top-[13px] before:h-3 before:bg-background before:content-['']">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="h-10 text-base md:text-sm rounded-lg rounded-r-none border-0 shadow-none focus-visible:ring-0 bg-transparent"
                    placeholder="Search projects"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center">
            {/* Native selects: reliable on mobile and no lingering focus ring */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FilterSelect
                      {...field}
                      options={["Featured", "Github"]}
                      className={cn(type === "Featured" && "rounded-r-lg")}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {type === "Github" && (
              <FormField
                control={form.control}
                name="sort"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FilterSelect
                        {...field}
                        options={["Stars", "Last updated"]}
                        className="rounded-r-lg"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            )}
          </div>
        </form>
      </Form>
      {renderProjects()}
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GithubRepo = React.memo(({ repo }: { repo: any }) => (
  <a
    href={repo.html_url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full h-full min-h-[90px] flex flex-col rounded-lg p-2 border text-sm hover:bg-muted/50 duration-100 transition-all ease-in-out"
  >
    <h1>{repo.name}</h1>
    <p className="flex-1 text-xs text-muted-foreground">{repo.description}</p>
    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
      <p>{repo.language}</p>
      {repo.stargazers_count > 0 && (
        <p className="flex items-center gap-px text-foreground">
          <Star size={12} />
          {repo.stargazers_count}
        </p>
      )}
      {repo.forks > 0 && <p>{repo.forks} forks</p>}
    </div>
  </a>
));

GithubRepo.displayName = "GithubRepo";

type FilterSelectProps = React.ComponentPropsWithoutRef<"select"> & {
  options: string[];
};

const FilterSelect = React.forwardRef<HTMLSelectElement, FilterSelectProps>(
  ({ options, className, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        {...props}
        className={cn(
          "h-10 min-w-16 lg:min-w-24 appearance-none bg-transparent pl-3 pr-8 text-base md:text-sm border-0 border-l rounded-none cursor-pointer outline-none hover:bg-muted transition-colors",
          className
        )}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 opacity-50"
      />
    </div>
  )
);
FilterSelect.displayName = "FilterSelect";
