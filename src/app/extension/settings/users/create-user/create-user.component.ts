import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user.inteface';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less']
})
export class CreateUserComponent implements OnInit {

  get email() {
    return this.emailForm.get('email');
  }
  get userRole() {
    return this.emailForm.get('userRole');
  }

  emailForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ]],
    userRole: ['0']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.userToEdit) {
      this.email.setValue(this.userToEdit.email)
      this.userRole.setValue(this.userToEdit.userRole)
    }
  }

  @Input() public userToEdit: User;

  @Output() cancel = new EventEmitter<void>();
  @Output() userEmit = new EventEmitter<User>();

  onSubmit() {
    if (this.emailForm.valid) {
      console.log('form submitted');
      this.userEmit.emit(this.emailForm.value)
    } else {
      this.validateAllFormFields(this.emailForm);
    }
    console.log(this.emailForm.value);
  }

  onCancel(){
    this.cancel.emit();
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
