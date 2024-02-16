import getUrl from './utils';

export async function getImageDimensions(
  url: string
): Promise<{ height: number | null; width: number | null }> {
  const res = await fetch(getUrl(url));

  if (!res.ok) {
    console.error('Something went wrong');
    return {
      height: null,
      width: null,
    };
  }

  const blob = await res.blob();
  const file = new File([blob], '', { type: blob.type });

  console.log(file);

  if (!file) {
    console.error('Something went wrong');
    return {
      height: null,
      width: null,
    };
  }

  const img = new Image();

  return new Promise((resolve, reject) => {
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      resolve({ width, height });
    };

    img.onerror = () => {
      reject('Error loading image');
    };

    img.src = URL.createObjectURL(file);
  });
}
