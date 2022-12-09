import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
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
  @Output() newTopicEvent = new EventEmitter();
  addNewTopic: boolean = false;

  topics: Topic[] = TOPICS;
  items: Item[] = ITEMS;

  title!: string;
  addTopic!: boolean;
  subscription!: Subscription;

  constructor(public topicService: TopicService) {}

  ngOnInit(): void {
    this.topicService.getTopics().subscribe((topics) => (this.topics = topics));
  }

  createTopic(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.topicService.addTopic(form.value.title);
    form.resetForm();
  }
}
