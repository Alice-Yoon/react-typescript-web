import { Comment } from './commentType'

export interface Community {
  id: number;
  tags: string[];
  title: string;
  content: string;
  comments: Comment[];
}