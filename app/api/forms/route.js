import { getForm } from "app/lib/db-connector";
import { NextResponse } from "next/server";

// get id from url and call db-connector file.
export async function GET(request) {
  const id = request.nextUrl.searchParams.get("id");
  const data = await getForm(id);
  if (data.error == "No result found") {
    return NextResponse.json(
      {
        code: 404,
        error:
          "Please check the URL or if you think this is an error, please contact us.",
      },
      { status: 404 }
    );
  }

  if (data) {
    if (data.error) {
      return NextResponse.json(
        {
          code: 500,
          error: "Internal server error " + data.error,
        },
        { status: 500 }
      );
    }
    let time = Date.now();
    let expires = JSON.parse(data).expires * 1000;
    if (expires < time && expires !== undefined) {
      return NextResponse.json(
        {
          code: 410,
          error:
            "Access denied, this module has expired. Please check the URL or if you think this is an error, please contact us.",
        },
        { status: 410 }
      );
    } else {
      return NextResponse.json(JSON.parse(data));
    }
  }
}
