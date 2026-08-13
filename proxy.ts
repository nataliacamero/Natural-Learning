import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { localeFromPath } from "@/app/_i18n/content";

export function proxy(request: NextRequest) {
  if (
    process.env.NODE_ENV !== "development" &&
    request.nextUrl.pathname.startsWith("/recordatorio")
  ) {
    return new NextResponse(null, { status: 404 });
  }

  const requestHeaders = new Headers(request.headers);
  const firstSegment = request.nextUrl.pathname.split("/").filter(Boolean)[0];
  requestHeaders.set("x-natural-learning-locale", localeFromPath(firstSegment));

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
