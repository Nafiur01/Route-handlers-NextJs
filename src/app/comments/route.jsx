import data from "./data";
import { NextRequest } from "next/server";

export async function GET(request){
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query ? data.filter(comment => comment.text.includes(query)): data;
  return Response.json(filteredComments);
}

export async function POST(request) {
  const comment = await request.json();
  const newComment = {
    id: data.length + 1,
    text: comment.text,
  };
  data.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

