import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoreButtonAction } from 'src/app/interfaces/more-button-action.interface';
import { Tester } from 'src/app/interfaces/tester.interface';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.less']
})
export class EventParticipantsComponent implements OnInit {

  testers: Tester[] = [];
  testerToEdit: Tester;
  isAddTesterModalOn: boolean = false;
  actions: MoreButtonAction[] = [
    {
      name: 'Edit',
      action: 'edit',
      display: true
    },
  ]
  testerToEditIndex: number;

  constructor() { }

  ngOnInit(): void {}

  @Output() testerEmit = new EventEmitter<Tester>();

  onAddTesterEdit(index: number){
    this.testerToEdit = this.testers[index];
    this.testerToEditIndex = index
    this.toggleModal();
  }

  addTester(){
    this.toggleModal();
  }

  saveTester(tester: Tester){
    if(this.testerToEditIndex != null) {
      this.testers[this.testerToEditIndex] = tester;
      this.testerToEditIndex = null;
      this.testerToEdit = null;
      console.log(this.testerToEdit);
      
    } else {
      this.testers.push(tester)
    }
  }

  toggleModal(){
    this.isAddTesterModalOn = !this.isAddTesterModalOn;
  }
  
  onAction(event: string, index: number){
    switch (event) {
      case 'edit': this.onAddTesterEdit(index); break;
    }
  }

}
