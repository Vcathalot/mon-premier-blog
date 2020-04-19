import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-premier-blog';

  constructor() {
    const config = {
    apiKey: "AIzaSyAk8LHsDvCfWHBsiGzH1FuPPhwZ6gC-NQY",
    authDomain: "mon-premier-blog-81e89.firebaseapp.com",
    databaseURL: "https://mon-premier-blog-81e89.firebaseio.com",
    projectId: "mon-premier-blog-81e89",
    storageBucket: "mon-premier-blog-81e89.appspot.com",
    messagingSenderId: "444107815512",
    appId: "1:444107815512:web:5447bd61d72e8b5690a82d",
    measurementId: "G-H39S2TJET8"
  };
  firebase.initializeApp(config);
}
}
