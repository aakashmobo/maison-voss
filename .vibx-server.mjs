import { createServer } from 'vite';
const port = parseInt(process.env.VITE_PORT || '5173');
const server = await createServer({
  server: {
    host: '0.0.0.0',
    port,
    allowedHosts: true,
  },
});
await server.listen();
server.printUrls();
