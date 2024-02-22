import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';

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
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
