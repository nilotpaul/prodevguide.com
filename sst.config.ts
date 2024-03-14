import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';

import dotenv from 'dotenv';

dotenv.config({
  path: './.env.local',
});

export default {
  config(_input) {
    return {
      name: 'prodevguide',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, 'site', {
        environment: {
          GH_ACCESS_TOKEN: process.env.GH_ACCESS_TOKEN!,
          ASSETS_BUCKET_URL: process.env.ASSETS_BUCKET_URL!,
          NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL!,
          NEXT_PUBLIC_SITE_MODE: process.env.NEXT_PUBLIC_SITE_MODE!,
        },
        assets: {
          nonVersionedFilesTTL: 86400,
          versionedFilesTTL: 86400,
        },
        edge: true,
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
