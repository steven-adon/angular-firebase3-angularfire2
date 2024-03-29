import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularApp';
  dishes: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.dishes = db.list('/dishes');
  }
}
