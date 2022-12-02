import { Topic } from './topic.interface';

export interface Item {
  name: string;
  url: string;
  comments?: string;
  // belongsToTopic: Topic;
}
