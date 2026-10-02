import { Octokit } from "octokit";
import { NextResponse } from "next/server";

export const revalidate = 3600; // Revalidate every hour
export const dynamic = 'force-static';
export const runtime = 'nodejs';

export async function GET() {
  try {
    // Public data only: the Actions GITHUB_TOKEN is scoped to this repo and hides the others
    const octokit = new Octokit({ auth: process.env.GH_PUBLIC_TOKEN });
    const repos = await octokit.rest.repos.listForUser({
      username: "hoangpham2263",
      per_page: 100,
      type: "owner",
      direction: "desc",
      sort: "pushed",
      // Unique header per build so the Next.js fetch cache never serves a stale repo list
      headers: { "x-build-time": String(Date.now()) },
    });

    const filteredRepos = repos.data.filter(repo => !repo.fork && !repo.private);
    
    return NextResponse.json(filteredRepos);
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub repositories" },
      { status: 500 }
    );
  }
} 