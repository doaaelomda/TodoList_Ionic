import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-order-config',
  templateUrl: './order-config.page.html',
  styleUrls: ['./order-config.page.scss'],
})
export class OrderConfigPage implements OnInit  {

  form!: FormGroup;
  todo!:Todo
  constructor(private fb: FormBuilder, private navCtrl: NavController, private DataService:DataService) {
    this.createForm();
  }

  ngOnInit(){
    this.todo=this.DataService.getParams().todo;
    this.patchForm()
  }

  patchForm(){
    if(this.todo){
      this.form.patchValue({
        title:this.todo.title,
        description:this.todo.description
      })
    }
  }
  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(){
    let form =this.form.value
    if(this.todo){
      this.todo.title=form.title;
      this.todo.description=form.description;
      this.todo.date=new Date()
    }
    this.navCtrl.navigateBack('/home');
  }

}
