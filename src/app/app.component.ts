import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-premier-blog';

  constructor(){
    const config = {
      apiKey: "AIzaSyC7IvrWr54zPDbeN-NWLO2nLSDWOCjBjYA",
      authDomain: "mon-premier-blog-e3b56.firebaseapp.com",
      databaseURL: "https://mon-premier-blog-e3b56.firebaseio.com",
      projectId: "mon-premier-blog-e3b56",
      storageBucket: "mon-premier-blog-e3b56.appspot.com",
      messagingSenderId: "561293839260",
      appId: "1:561293839260:web:55ade4b6d9a2f750f61659",
      measurementId: "G-S9TT1TE233"
    };
    firebase.initializeApp(config);
  }

  
}
