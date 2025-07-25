import { NextRequest, NextResponse } from "next/server";
import { getCookieServer }           from "./lib/cookiesServer";
import { api } from "./services/api";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/__next") || pathname === "/") {
        NextResponse.next(); 
    }

    const token = await getCookieServer();

    if (pathname.startsWith("/dashboard")) {
        if (!token) {
            return NextResponse.redirect(new URL("/", req.url))
        }

        const isValid = await validadeToken(token);

        if (!isValid) {
            return NextResponse.redirect(new URL("/", req.url))
        }
    }

    return NextResponse.next();
}

async function validadeToken(token: string) {
    if (!token) return false;

    try {
        await api.get("/userInfo", {
           headers: {
            Authorization: `Bearer ${token}`
           } 
        })

        return true;
    } catch(error) {
        return false;
    }
}