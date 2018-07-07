import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  count: string;
  socket:WebSocketSubject<string>;

  constructor(public navCtrl: NavController
  ) {

    this.socket = Observable.webSocket('ws://192.168.1.101:8080');

    this.socket.retry().subscribe(
       (msg) => {
         console.log('message received: ' + msg);
         this.count = msg;
        },
       (err) => console.log(err),
       () => console.log('complete')
     );
  }


 

  add(){
    this.socket.next("0");
  }


}
