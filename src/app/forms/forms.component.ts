import { Component, OnInit }                                          from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable }                                                 from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Sasha', 'Ann'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null,
          [Validators.required, this.forbiddenNames.bind(this)
          ]),
        email: new FormControl(null,
          [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      gender: new FormControl('male'),
      hobbies: new FormControl([])
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

  // @ViewChild('f') signupForm: NgForm; //for second case onSubmit
  // defaultQuestion = 'pet';
  // answer = '';
  // genders = ['male', 'female'];
  // user = {
  //   username: '',
  //   email: '',
  //   secretQuestion: '',
  //   answer: '',
  //   gender: ''
  // };
  // submitted = false;
  //
  // suggestUserName() {
  //   const suggestedName = 'Suggested';
  //   // this.signupForm.setValue({
  //   //   userData: {
  //   //     username: suggestedName,
  //   //     email: ''
  //   //   },
  //   //   secret: 'pet',
  //   //   questionAnswer: '',
  //   //   gender: 'male'
  //   // });
  //   this.signupForm.form.patchValue({
  //     userData: {
  //       username: suggestedName
  //     }
  //   });
  // }
  //
  // // onSubmit(form: NgForm) {
  // //   console.log(form);
  // // }
  // onSubmit() {
  //   // console.log(this.signupForm);
  //   this.submitted = true;
  //   this.user.username = this.signupForm.value.userData.username;
  //   this.user.email = this.signupForm.value.userData.email;
  //   this.user.secretQuestion = this.signupForm.value.secret;
  //   this.user.answer = this.signupForm.value.questionAnswer;
  //   this.user.gender = this.signupForm.value.gender;
  //
  //   this.signupForm.reset();
  // }
}
