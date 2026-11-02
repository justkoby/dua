import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { handleChatRequest } from './api/chat.js';

function duaGeminiProxyPlugin() {
  let envVars = process.env;
  const attachMiddleware = middlewares => {
    middlewares.use('/api/chat', async (req, res, next) => {
      if (req.method !== 'POST') return next();
      let raw = '';
      for await (const chunk of req) {
        raw += chunk;
      }
      let body = {};
      try {
        body = JSON.parse(raw || '{}');
      } catch {
        body = {};
      }
      const result = await handleChatRequest(body, envVars);
      res.statusCode = result.status;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result.payload));
    });
  };

  return {
    name: 'dua-gemini-proxy',
    configResolved(config) {
      envVars = { ...process.env, ...loadEnv(config.mode, process.cwd(), '') };
    },
    configureServer(server) {
      attachMiddleware(server.middlewares);
    },
    configurePreviewServer(server) {
      attachMiddleware(server.middlewares);
    },
  };
}

export default defineConfig({
  plugins: [react(), duaGeminiProxyPlugin()],
});
