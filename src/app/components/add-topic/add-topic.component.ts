import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Topic } from 'src/app/models/topic.interface';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css'],
})
export class AddTopicComponent implements OnInit {
  @Output() newTopicEvent = new EventEmitter();

  title!: string;
  addTopic!: boolean;
  subscription!: Subscription;

  constructor() {}

  ngOnInit(): void {}

  public showAddTopic() {
    // TODO write logic for showing form to add new topic.
    this.newTopicEvent.emit();
    console.log('showAddTopic triggered');
  }
}
