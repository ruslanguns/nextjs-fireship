const PORT = process.env.PORT || 3000;
const { protocol, hostname, port } = new URL(
  process.env.VERCEL_URL || `http://localhost:${PORT}`
);

export const SERVICE_URL = `${protocol}//${hostname}${port ? `:${port}` : ''}`;
