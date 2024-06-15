import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const validRoutes = [
  "/",
  "/daycare",
  "/playschool",
  "/our-approach",
  "/our-programmes",
  "/our-team",
  "/our-vision-and-mission",
  "/our-features",
  "/school-tour",
  "/our-location",
  "/academic-calender",
  "/our-facilities",
];

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  // Mengabaikan permintaan untuk aset statis dan API
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.match(/\.(.*)$/) ||
    pathname === "/coming-soon" ||
    pathname === "/register"
  ) {
    return NextResponse.next();
  }

  // Cek apakah rute valid atau tidak
  if (!validRoutes.includes(pathname)) {
    // Redirect ke halaman "Coming Soon"
    const url = req.nextUrl.clone();
    url.pathname = "/coming-soon";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*", // Middleware akan berjalan pada semua rute
};
