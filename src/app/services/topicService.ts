import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Topic } from '../models/topic.interface';
import { TOPICS } from '../mock-topics';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  public addNewTopic: boolean = false;

  constructor(private http: HttpClient) {}

  showAddTopicForm() {
    this.addNewTopic = true;
    console.log('boolean changed to true');
  }

  addTopic(title: string) {
    console.log('addTopic triggered from service');
    console.log(title);
  }

  getTopics(): Observable<Topic[]> {
    const topics = of(TOPICS);
    return topics;
    // this.http.get('http://localhost:3000/api/posts').subscribe((topicsData) => {
    //   this.topics = topicsData;
    // });
  }
}
