const { listen, copy } = Deno;

// @ts-ignore
(async () => {
  const addr = "127.0.0.1:8080";
  const listener = listen("tcp", addr);
  console.log("listening on", addr);
  while (true) {
    const conn = await listener.accept();
    copy(conn, conn);
  }
})();
