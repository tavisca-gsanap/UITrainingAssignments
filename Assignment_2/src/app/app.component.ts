import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
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

  // hideEditNote$ : Observable<Boolean>
  public currentSection = "one"
  hideEditNote:boolean;
  subscription: Subscription;
  subscription1: Subscription;
  currentCard = new CardStickyNote("as","avsvsau",0);

  constructor(private data: CommonService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(hideEditNote => this.hideEditNote = hideEditNote);
    this.subscription1 = this.data.currentCard.subscribe(card=> this.currentCard = card);
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // constructor(private store : Store<AppState>){
  //     this.hideEditNote$ = this.store.select('hideEditNote')
  //     console.log(this.hideEditNote$)
  // }

  title = 'my-app';

  saveText(box: any) { 
    console.log(box.value); 
    box.value = "";
    this.hideEditNote = true;
  }


  // showEdit(){
  //   this.store.dispatch({type:"Show"})
  // }
  // hideEdit(){
  //   this.store.dispatch({type:"Hide"})
  // }
  // (newItemEvent)="changehideEditNote($event)"
}
