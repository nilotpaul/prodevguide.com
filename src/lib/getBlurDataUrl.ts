import { getPlaiceholder } from 'plaiceholder';

export const getBlurDataUrl = async (imageUrl: string) => {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Image fetch error: ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (err) {
    console.error(err);
  }
};
