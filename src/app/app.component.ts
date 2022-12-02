import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'My Favs';

  addNewTopic: boolean = false;

  addTopic(): void {
    // set addTopic button's value to true
    this.addNewTopic = true;

    console.log('addTopic emmited');
    // TODO call the function to display the add topic form
    // showAddTopic();
  }
}
