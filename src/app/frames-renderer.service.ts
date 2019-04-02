import { Injectable } from '@angular/core';
import { DetectedObject } from '@tensorflow-models/coco-ssd';

@Injectable({
  providedIn: 'root'
})
export class FramesRendererService {

  constructor() {
  }

  render(objects: DetectedObject[]) {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const font = '16px sans-serif';
    ctx.font = font;
    ctx.textBaseline = 'top';

    objects.forEach(object => {
      const x = object.bbox[0];
      const y = object.bbox[1];
      const width = object.bbox[2];
      const height = object.bbox[3];

      ctx.strokeStyle = '#00FFFF';
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);

      ctx.fillStyle = '#00FFFF';
      const textWidth = ctx.measureText(object.class).width;
      const textHeight = parseInt(font, 10);
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    objects.forEach(object => {
      const x = object.bbox[0];
      const y = object.bbox[1];
      ctx.fillStyle = '#000000';
      ctx.fillText(object.class, x, y);
    });
  }
}
