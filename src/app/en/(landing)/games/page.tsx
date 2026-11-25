import { GamesView, gamesMetadata } from "@/views/games";

export const metadata = gamesMetadata("en");

export default function GamesPage() {
  return <GamesView locale="en" />;
}
