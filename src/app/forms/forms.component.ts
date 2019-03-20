import { Component, OnInit }      from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
    'username': new FormControl(null),
    'email': new FormControl(null),
    'gender': new FormControl('male')
    });
  }

}
