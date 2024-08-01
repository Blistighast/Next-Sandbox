import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  //request: NextRequest is needed to prevent caching even if not used
  //fetch users from database
  return NextResponse.json([
    { id: 1, name: "Brian" },
    { id: 2, name: "Julie" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  //validate, if invalid return 400 error
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
