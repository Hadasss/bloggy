import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from '../../models/topic.interface';
import { TOPICS } from '../../mock-topics';
import { ITEMS } from '../../mock-items';
import { Item } from '../../models/item.interface';
import { TopicService } from 'src/app/services/topicService';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  @Input() topic!: Topic;

  topics: Topic[] = TOPICS;
  items: Item[] = ITEMS;

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topicService.getTopics().subscribe((topics) => (this.topics = topics));
  }
}
