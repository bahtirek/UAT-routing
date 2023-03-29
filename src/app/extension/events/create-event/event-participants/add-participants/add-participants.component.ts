import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Browser } from 'src/app/interfaces/device.interface';
import { Tester } from 'src/app/interfaces/tester.interface';

@Component({
  selector: 'app-add-participants',
  templateUrl: './add-participants.component.html',
  styleUrls: ['./add-participants.component.less']
})
export class AddParticipantsComponent implements OnInit {

  browsersList: Browser[] = [
    {
      id: 1,
      name: 'Chrome Desktop',
      state: false
    },
    {
      id: 2,
      name: 'Safari Desktop',
      state: false
    },
    {
      id: 3,
      name: 'Firefox Desktop',
      state: false
    },
    {
      id: 4,
      name: 'Edge Desktop',
      state: false
    },
    {
      id: 5,
      name: 'Chrome Mobile',
      state: false
    },
    {
      id: 6,
      name: 'Safari Mobile',
      state: false
    },
  ]
  tester: Tester = {};
  testerEmail: string = ''
  testerSearch = new Subject<string>();
  //instructions: string = '';
  submitInProgress: boolean = false;

  get email() {
    return this.participantForm.get('email');
  }
  get browsers() {
    return this.participantForm.get('browsers') as FormArray;
  }
  get instructions() {
    return this.participantForm.get('instructions');
  }


  participantForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ]],
    instructions: [''],
    browsers: this.fb.array ([])
  }); 

  constructor(private fb: FormBuilder ) { }


  ngOnInit(): void {
    if (this.testerToEdit) {
      this.setBrowsersControlArray(this.testerToEdit.browsers)
      this.email.setValue(this.testerToEdit.email)
      this.instructions.setValue(this.testerToEdit.instructions)
    } else {
      this.setBrowsersControlArray(this.browsersList);
    }
  }

  @Input() public testerToEdit: Tester;
  @Output() cancel = new EventEmitter<void>();
  @Output() testerEmit = new EventEmitter<Tester>();
  
  
    
  onChoose(tester: Tester){
    this.tester.email = tester.email;
    this.tester.firstname = tester.firstname;
    this.tester.lastname = tester.lastname;
    this.searchResults = [];
  }

  onSaveTester(){
    this.tester.browsers = this.browsers.value;
    this.tester.email = this.email.value;
    this.tester.instructions = this.instructions.value;
    this.testerEmit.emit(this.tester);
    this.onCancel();
  }

  setBrowsersControlArray(browsersList: Browser[]){
    browsersList.forEach((item) => {
      let result = this.fb.group({
        state: [item.state],
        id: [item.id],
        name: [item.name],
      })
      this.browsers.push(result);
    })
  }

  onCancel(){
    this.cancel.emit();
  }

  searchResults: Tester[] = [
    {
      testerId: 1,
      email: 'tester1@test.com',
      firstname: 'tester1',
      lastname: 'tester1'
    },
    {
      testerId: 2,
      email: 'tester2@test.com',
      firstname: 'tester2',
      lastname: 'tester2'
    },
    {
      testerId: 3,
      email: 'tester3@test.com',
      firstname: 'tester3',
      lastname: 'tester3'
    },
  ]

}
