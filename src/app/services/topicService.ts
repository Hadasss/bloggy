import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Topic } from '../models/topic.interface';
import { TOPICS } from '../mock-topics';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  constructor() {}

  getTopics(): Observable<Topic[]> {
    const topics = of(TOPICS);
    return topics;
  }
}
