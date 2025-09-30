import server from './server.ts';

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
