import { Component, OnInit, Input } from '@angular/core';
//import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CommonService } from '../common.service';

export interface AppState {
  hideEditNote : boolean
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('card') card : CardStickyNote;
  @Input('sectionId') sectionId: any;
  @Input('currentSection') currentSection:boolean;

//   hideEditNote : Observable<Boolean>
  
//   constructor(private store : Store<AppState>){
//     this.hideEditNote = this.store.select('hideEditNote')
// }
    //this.card = new CardStickyNote(this.sectionId +"_1", "DemoText of section "+ this.sectionId, 0);
    hideEditNote:boolean;
    subscription: Subscription;
    currentCard:string;
    subscription1:Subscription;
  
    constructor(private data: CommonService) { }
  
    ngOnInit() {
      this.subscription = this.data.currentMessage.subscribe(hideEditNote => this.hideEditNote = hideEditNote);
      this.subscription1 = this.data.currentCard.subscribe(cardId => this.currentCard = cardId);
    }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
      this.subscription1.unsubscribe();
    }

  editNote(){
    // this.store.dispatch({type:"Show"})
    this.data.changeMessage(false);
    this.currentSection = this.sectionId;
    this.data.changeCard(this.card.text);
    // console.log(this.hideEditNote);
  }

}

export class CardStickyNote{
  constructor(private _id :string, private _text:string, private _voteCount:number){
  }

  get id(){
    return this._id;
  }

  get text(){
    return this._text;
  }

  set text(input){
    this._text = input;
  }

  get voteCount(){
    return this._voteCount;
  }

  addVote(){
    this._voteCount+=1;
  }
}


