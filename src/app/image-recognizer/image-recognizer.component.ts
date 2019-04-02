import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ImageRecognizerService } from '../image-recognizer.service';
import { State } from '../reducers';
import { Store } from '@ngrx/store';
import { selectErrorDetails, selectIsModelLoaded } from '../recognizer/recognizer.selectors';
import { Observable } from 'rxjs';
import { InitializeCamera, StartRecognition } from '../recognizer/recognizer.actions';

@Component({
  selector: 'app-image-recognizer',
  templateUrl: './image-recognizer.component.html',
  styleUrls: ['./image-recognizer.component.scss']
})
export class ImageRecognizerComponent implements OnInit, AfterViewInit {
  private isModelLoaded: Observable<boolean>;
  private errorDetails: Observable<string>;

  constructor(private imageRecognizerService: ImageRecognizerService,
              private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new InitializeCamera());
    this.isModelLoaded = this.store.select(selectIsModelLoaded);
    this.errorDetails = this.store.select(selectErrorDetails);
  }

  ngAfterViewInit() {
    this.store.dispatch(new StartRecognition());
  }
}
