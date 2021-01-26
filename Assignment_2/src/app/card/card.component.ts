import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('sectionId') sectionId: any;
  card : any;
  constructor() {
    //this.card = new CardStickyNote(this.sectionId +"_1", "DemoText of section "+ this.sectionId, 0);
   }

  ngOnInit(): void {
    this.card = new CardStickyNote("note"+ this.sectionId +"_1", "DemoText of section "+ this.sectionId, 0);
  }

}

class CardStickyNote{
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


