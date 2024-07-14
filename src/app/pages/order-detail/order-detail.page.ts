import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit , OnDestroy {

  todo: Todo | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.todo = this.dataService.getParams().todo;
  }

  ngOnDestroy(): void {
    this.dataService.setParams({})
  }


}
