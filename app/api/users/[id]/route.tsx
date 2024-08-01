import { NextRequest, NextResponse } from "next/server";

import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //fetch data from db
  //if not found return 404 error
  //else return data
  if (params.id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Brian" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //validate request body, if invalidate return 400 error
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  //fetch user, if doesnt exist return 404 error
  if (params.id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json({});
}
