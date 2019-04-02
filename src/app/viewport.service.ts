import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {

  constructor() {
  }

  getCanvasElement() {
    return document.getElementById('canvas') as HTMLCanvasElement;
  }

  getVideoElement() {
    return document.getElementById('video') as HTMLVideoElement;
  }

  maximize() {
    const canvasElement = this.getCanvasElement();
    const videoElement = this.getVideoElement();
    canvasElement.width = videoElement.width = window.innerWidth;
    canvasElement.height = videoElement.height = window.innerHeight;
  }
}
