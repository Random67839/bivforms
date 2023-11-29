import { getForm } from "app/lib/db-connector";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getForm();
  /* getForm function defaults to see if form exists in table. If not, it creates it.
   * Function defaults "no result found" if table is present, but form is not found.
   * Function defaults "ER_NO_SUCH_TABLE" if table is not found, and creates it.
   * Function defaults "Internal server error" if any other error occurs.
   * Function defaults "Connection successful" if tables are found.
   */

  if (data.error == "ER_NO_SUCH_TABLE")
    // If tables are not found, create them.
    return NextResponse.json(
      {
        code: 200,
        state: "Connection successful. Tables not found. Creating tables...",
      },
      { status: 200 }
    );
  else if (data.error == "No result found") {
    return NextResponse.json(
      {
        code: 200,
        state: "Connection successful.",
      },
      { status: 200 }
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
    } else {
      return NextResponse.json(
        {
          code: 200,
          state: "Connection successful.",
        },
        { status: 200 }
      );
    }
  }
}
