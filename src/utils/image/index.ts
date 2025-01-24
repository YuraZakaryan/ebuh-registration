import html2canvas from 'html2canvas';
import mammoth from 'mammoth';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import { TCrop } from '@types';

GlobalWorkerOptions.workerSrc = pdfWorker;

const createImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

const getRadianAngle = (degreeValue: number): number => {
  return (degreeValue * Math.PI) / 180;
};

const rotateSize = (width: number, height: number, rotation: number) => {
  const rotRad = getRadianAngle(rotation);

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
};

const getCroppedImg = async (
  imageSrc: string,
  pixelCrop: TCrop,
  rotation = 0,
  flip = { horizontal: false, vertical: false }
) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return null;
  }

  const rotRad = getRadianAngle(rotation);

  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  );

  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-image.width / 2, -image.height / 2);

  ctx.drawImage(image, 0, 0);

  const croppedCanvas = document.createElement('canvas');

  const croppedCtx = croppedCanvas.getContext('2d');

  if (!croppedCtx) {
    return null;
  }

  croppedCanvas.width = pixelCrop.width;
  croppedCanvas.height = pixelCrop.height;

  croppedCtx.drawImage(
    canvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return croppedCanvas.toDataURL('image/jpeg');
};

const readFileData = (file: File): Promise<string | ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result;
      if (result) {
        resolve(result);
      } else {
        reject(new Error('Failed to read file data'));
      }
    };

    reader.onerror = (err) => {
      reject(err);
    };

    reader.readAsArrayBuffer(file);
  });
};

const convertPdfToImage = async (file: File): Promise<string> => {
  const data = await readFileData(file);

  const pdf = await getDocument(data).promise;
  const page = await pdf.getPage(1);

  const scale = 1.5;
  const viewport = page.getViewport({ scale });

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (context) {
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({ canvasContext: context, viewport }).promise;

    const base64Image = canvas.toDataURL();
    canvas.remove();

    return base64Image;
  } else {
    throw new Error('Canvas context is not available');
  }
};

const convertDocxToImage = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();

  const { value: html } = await mammoth.convertToHtml({ arrayBuffer });

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  tempDiv.style.whiteSpace = 'pre-wrap';
  tempDiv.style.fontFamily = 'Arial, sans-serif';

  document.body.appendChild(tempDiv);

  const canvas = await html2canvas(tempDiv, {
    useCORS: true,
  });

  const scaledCanvas = document.createElement('canvas');
  const ctx = scaledCanvas.getContext('2d')!;
  const scale = window.devicePixelRatio;

  scaledCanvas.width = canvas.width * scale;
  scaledCanvas.height = canvas.height * scale;
  ctx.scale(scale, scale);
  ctx.drawImage(canvas, 0, 0);

  document.body.removeChild(tempDiv);

  return scaledCanvas.toDataURL('image/png');
};

export { convertDocxToImage, convertPdfToImage, getCroppedImg, rotateSize };
