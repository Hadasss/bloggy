import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from '../../models/topic.interface';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  @Input() title!: String;

  topic!: Topic;

  addNewTopic: boolean = false;

  public topicsArr: Topic[] = [
    {
      title: 'School Stuff',
    },
    {
      title: 'Home Improvement',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addTopic(): void {
    // set addTopic button's value to true
    this.addNewTopic = true;

    console.log('addTopic emmited');
    // TODO call the function to display the add topic form
    // showAddTopic();
  }
}
