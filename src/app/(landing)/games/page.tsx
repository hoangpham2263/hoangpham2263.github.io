import { GamesView, gamesMetadata } from "@/views/games";

export const metadata = gamesMetadata("vi");

export default function GamesPage() {
  return <GamesView locale="vi" />;
}
