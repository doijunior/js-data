import Tesseract from 'tesseract.js';

const { TesseractWorker } = Tesseract;
const worker = new TesseractWorker();

worker
  .recognize('./sample.jpg')
  .progress((p) => {
    console.log('progress', p);
  })
  .then(({ text }) => {
    console.log(text);
    worker.terminate();
  });
