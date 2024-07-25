import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  publicRoutes: ['/', '/profile', '/register', '/how-it-works','/about-us','/hubs','/team','/api/webhooks/clerk', '/api/users', '/api/hubs']
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};