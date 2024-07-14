import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      UserName: ['', Validators.required],
      PassWord: ['', Validators.required]
    });
  }

  submitForm() {
    this.navCtrl.navigateForward('/home');
  }
}
