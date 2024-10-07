import { redirect } from "next/navigation";
import data from "../data";

export async function GET(request, { params }) {
  if (parseInt(params.id) > data.length) {
    redirect('/comments/')
  }
  const comment = data.find((comment) => comment.id === parseInt(params.id));
  return Response.json(comment);
}

export async function PATCH(request, { params }) {
  const body = await request.json();
  const { text } = body;
  const index = data.findIndex((comment) => comment.id === parseInt(params.id));
  data[index].text = text;
  return Response.json(data[index]);
}

export async function DELETE(request, { params }) {
  const index = data.findIndex((comment) => comment.id === parseInt(params.id));
  const deletedComment = data[index];
  data.splice(index, 1);
  return Response.json(deletedComment);
}
