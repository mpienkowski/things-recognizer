import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() {
  }

  initialize(): Observable<void> {
    const video = document.getElementById('video') as HTMLVideoElement;
    const subject = new Subject<void>();

    navigator.mediaDevices.enumerateDevices()
      .then(devices => devices.filter(device => device.kind === 'videoinput').length)
      .then(camerasNumber => {
        if (camerasNumber === 0) {
          throw new Error('No camera detected!');
        }

        return navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            facingMode: camerasNumber > 1 ? {ideal: 'environment'} : 'user'
          }
        });
      })
      .then(stream => {
        video.srcObject = stream;
        video.onloadedmetadata = () => subject.next();
      })
      .catch(e => subject.error(e.message));

    return subject.asObservable();
  }
}
