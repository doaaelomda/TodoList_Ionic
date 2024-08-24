import { Todo } from './../../todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private navParams: any = {};

  todos: Todo[] = [
    {
      title: 'title1',
      description: 'description1',
      date: new Date(),
    },
    {
      title: 'title2',
      description: 'description2',
      date: new Date(),
    },
    {
      title: 'title3',
      description: 'description3',
      date: new Date(),
    }
    ,
    {
      title: 'title4',
      description: 'description4',
      date: new Date(),
    }
    ,
    {
      title: 'title5',
      description: 'description5',
      date: new Date(),
    }
  ];

  constructor() {}

  getParams() {
    return this.navParams;
  }

  setParams(body: any) {
    this.navParams = body;
  }

  getData(): Todo[] {
    return this.todos;
  }

  postData() {
    throw new Error('Method not implemented');
  }

  updateData() {
    throw new Error('Method not implemented');
  }

  deleteData() {
    throw new Error('Method not implemented');
  }
}
