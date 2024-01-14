import { auth } from "./auth";

export default auth((req)=>{
    const isLoggedIn = !!req.auth;
    console.log("Route: ",req.nextUrl.pathname);
    console.log("Is Logged in: ", isLoggedIn);
    
    
})


// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  }