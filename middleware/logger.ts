export function loggerMiddleware(req: Request) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
}
