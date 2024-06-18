import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    const protectedRoutes: Array<String> = ["/dashbord"];
    const token =request.cookies.get("token");
    const url=new URL(request.url);
    if(protectedRoutes.includes(url.pathname) && !token)
    {
        return NextResponse.redirect(new URL("/login",request.url));
    }
}
export const config ={
    matcher: ['/dashboard/:pathname*'],
}