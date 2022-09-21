require('dotenv').config();

const PORT = process.env.PORT || 4000;

export const config = {
  environment: process.env.ENVIRONMENT,
  URL: '/restoplus/api_v1',
  port: PORT,
  frontendPort: process.env.FRONTEND_PORT,
};
