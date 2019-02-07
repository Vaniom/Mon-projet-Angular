import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe (
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-Oh, an error occured ! : ' + error);
      },
      () => {
        console.log('observable complete');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
  constructor() {

  }
}
