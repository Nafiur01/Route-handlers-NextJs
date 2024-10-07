import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request) {
  const requestHeaders = new Headers(request.headers);
  const HeaderList = headers();
  const theme = request.cookies.get("theme");
  cookies().set("ResultsPerPage", "15");
  console.log(requestHeaders.get("Authorization"));
  console.log(HeaderList.get("Authorization"));
  console.log(theme);
  console.log(cookies().get("ResultsPerPage"));
  return new Response("<h2>Profile data from api</h2>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
