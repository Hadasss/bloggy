import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from '../../models/topic.interface';
import { TOPICS } from '../../mock-topics';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  topics: Topic[] = TOPICS;

  constructor() {}

  ngOnInit(): void {}
}
