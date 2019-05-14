import { serve } from "https://deno.land/std/http/server.ts";

async function main() {
  console.log("Server is running!");
  const body = new TextEncoder().encode("Hello World\n");
  for await (const req of serve(":8000")) {
    req.respond({ body });
  }
}

main();
