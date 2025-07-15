import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token")?.value;
  const userDataCookie = req.cookies.get("userData")?.value;

  const userData = userDataCookie ? JSON.parse(userDataCookie) : null;

  if (url.pathname.startsWith("/admin")) {
    if (
      !token ||
      !userData ||
      (userData.role !== "Admin" && userData.role !== "SuperAdmin")
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/user"],
};
