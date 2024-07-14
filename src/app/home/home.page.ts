import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data/data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todos: Todo[] = [];
  loading:boolean =true

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getData();
  }

  createTodo() {
    this.navCtrl.navigateForward('/order-config');
  }

  details(todo:Todo) {
    this.dataService.setParams({
      todo})
    this.navCtrl.navigateForward('/order-detail');
  }

  async delete(index:number) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Deleting',
      message: 'Are you sure you want to delete?',
      mode: 'ios',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('delete todo');
            this.todos.splice(index,1)
          }
        }
      ]
    });

    await alert.present();
  }

  edit(todo:Todo) {
    this.dataService.setParams({
      todo
    });
    this.navCtrl.navigateForward('/order-config');
  }

  getData() {
    this.loading=true
    setTimeout(() => {
      this.loading=false
      this.todos=this.dataService.getData()
    }, 3000);

  }

  refresherPage(event:any){
    setTimeout(() => {
      this.todos=this.dataService.getData()
      event.target.complete();
    }, 3000);
  }

  onIonInfinite(ev:any) {
    setTimeout(() => {
      this.todos=this.todos.concat(this.dataService.getData())
      ev.target.complete();
    }, 500);
  }
}

