require('dotenv').config();

const PORT = process.env.PORT || 4000;

export const config = {
  environment: 'development',
  URL: '/restoplus/api_v1',
  port: PORT,
  frontendPort: process.env.FRONTEND_PORT,
};
