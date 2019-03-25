<<<<<<< HEAD
import { Component, OnInit }                                          from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
=======
import { Component, OnInit }                             from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable }                                    from 'rxjs';
>>>>>>> 7c8bf03c72c9d8e8210c12870db180d7aeb01ad1

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
<<<<<<< HEAD
  forbiddenUsernames = ['Sasha', 'Ann'];
=======
  forbiddenUsernames = [ 'Chris', 'Anna'];
>>>>>>> 7c8bf03c72c9d8e8210c12870db180d7aeb01ad1

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
<<<<<<< HEAD
      'userData': new FormGroup({
        'username': new FormControl(null,
          Validators.required, this.forbiddenUsernames),
        'email': new FormControl(null, [Validators.required, Validators.email])
=======
      userData: new FormGroup({
        username: new FormControl(null,
          [Validators.required, this.forbiddenNames.bind(this)
          ]),
        email: new FormControl(null,
          [Validators.required, Validators.email], this.forbiddenEmails)
>>>>>>> 7c8bf03c72c9d8e8210c12870db180d7aeb01ad1
      }),
    gender: new FormControl('male'),
    hobbies: new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.valueChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      userData: {
        username: 'Bodya',
        email: 'your@mail.com',
      },
      gender: 'male',
      hobbies: []
    });
    this.signupForm.patchValue({
      userData: {
        username: 'Bodya'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {nameIsForbidden : true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
}
