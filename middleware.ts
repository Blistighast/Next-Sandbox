export { default } from "next-auth/middleware";

export const config = {
  // *: 0 or more params
  // +: 1 or more params
  // ?: 0 or 1 params
  matcher: ["/users/:id*"],
};
