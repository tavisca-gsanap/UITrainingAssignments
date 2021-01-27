import { Component } from '@angular/core';
//import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CardStickyNote } from './card/card.component';
import { CommonService } from './common.service';


export interface AppState {
  hideEditNote : boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  text:string = "default";
  // hideEditNote$ : Observable<Boolean>
  public currentSection = "one"
  hideEditNote:boolean;
  subscription: Subscription;
  subscription1: Subscription;
  currentCard : string;

  constructor(private data: CommonService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(hideEditNote => this.hideEditNote = hideEditNote);
    this.subscription1 = this.data.currentCard.subscribe(cardId => this.currentCard = cardId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
  }
  // constructor(private store : Store<AppState>){
  //     this.hideEditNote$ = this.store.select('hideEditNote')
  //     console.log(this.hideEditNote$)
  // }

  title = 'my-app';

  saveText() { 
    this.hideEditNote = true;
    this.currentCard = "";
  }

  changeText(hide: boolean) { 
    console.log(hide);

  }


  // showEdit(){
  //   this.store.dispatch({type:"Show"})
  // }
  // hideEdit(){
  //   this.store.dispatch({type:"Hide"})
  // }
  // (newItemEvent)="changehideEditNote($event)"
}
