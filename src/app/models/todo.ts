import { Priority } from '../enums/priority';

export class Todo {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  finish: boolean;
  selected?: boolean;
}