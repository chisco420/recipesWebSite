import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //loadedFeature= 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDdDAAjlpxdw1ok2NP-08VOqeVomDaNno8",
      authDomain: "ng-recipe-book-f25b3.firebaseapp.com",
    })
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
