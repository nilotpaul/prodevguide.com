import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    GH_ACCESS_TOKEN: z.string().min(1),
    ASSETS_BUCKET_URL: z.string().url().optional(),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  },
  runtimeEnv: {
    GH_ACCESS_TOKEN: process.env.GH_ACCESS_TOKEN,
    ASSETS_BUCKET_URL: process.env.ASSETS_BUCKET_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
});
