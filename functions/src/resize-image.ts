import { uploadImageToStorage } from "./upload-to-storage";

export const resizeImage = async (src: string) => {
  const response = await fetch(src);
  const blob = await response.blob();
  const file  = new File([blob], src.split('https://')[0]);

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = createImage(reader.result as string);
}

const createImage = (src: string) => {
  const imgElement = document.createElement('img');

  imgElement.src = src;

  imgElement.onload = resize(imgElement);
  return null;
}

const resize = (imageElement: HTMLImageElement) => {
  const canvas = document.createElement("canvas");

  const MAX_WIDTH = 300;

  canvas.width = MAX_WIDTH;

  canvas.height = MAX_WIDTH;

  const ctx = canvas.getContext("2d");
  if(ctx) {
    ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

    const srcEncoded = ctx.canvas.toDataURL(imageElement.src, "image/jpeg");
    uploadImageToStorage(srcEncoded);
    return null;
  }
  return null;
}