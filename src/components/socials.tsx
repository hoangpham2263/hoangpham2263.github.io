import { Button } from "@/components/ui/button";
import { IconMap } from "@/components/icon-map";
import { portfolioConfig } from "@/config/portfolio.config";
import Link from "next/link";
import { Calendar } from "lucide-react";

export const Socials = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        className="shadow-none hover:bg-background hover:text-primary border-[0.3px] border-transparent hover:border-b-4 hover:border-primary/30 active:border-b transition-all"
        asChild
      >
        <a href={portfolioConfig.schedule} target="_blank" rel="noopener noreferrer">
          Schedule a call
        </a>
      </Button>
      <Button
        className="group/cal fixed z-50 bottom-5 right-5 w-12 h-12 rounded-full hover:px-4 hover:w-auto p-2 duration-300 transition-all ease-out"
        asChild
      >
        <a href={portfolioConfig.schedule} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-2">
            <p className="group-hover/cal:block hidden duration-300 transition-all ease-out">Book a call</p>
            <Calendar strokeWidth={1} />
          </div>
        </a>
      </Button>
      <Button
        variant="outline"
        className="active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
        asChild
      >
        <Link href={portfolioConfig.resume}>
          Resume
        </Link>
      </Button>
      {Object.keys(portfolioConfig.links).map((key: string) => {
        const link =
          portfolioConfig.links[key as keyof typeof portfolioConfig.links] ?? "";
        return (
          <Button
            key={key}
            size="icon"
            variant="outline"
            className="active:border-b active:scale-[0.97] hover:border-[0.2px] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              {IconMap[key as keyof typeof IconMap]}
              <span className="sr-only">{`${key} - ${link}`}</span>
            </a>
          </Button>
        );
      })}
    </div>
  );
};
