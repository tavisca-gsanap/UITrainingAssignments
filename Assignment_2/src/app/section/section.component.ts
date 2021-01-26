import { Component, Input, OnInit } from '@angular/core';
import { CardStickyNote } from '../card/card.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input('sectionId') sectionId: any;
  hidewWriteNote = true;
  notesCount = 1;
  notes: string = `<app-card id="someIdwfas" text="text whciahci"></app-card>`;
  cardId = "someId"
  cards:Array<CardStickyNote>;
  constructor() { }

  ngOnInit(): void {
    this.hidewWriteNote = true;
    this.cards=[new CardStickyNote("note_"+ this.sectionId +"_" +this.notesCount , "DemoText of section "+ this.sectionId, 0)];
  }

  onEnter(box: any) { 
    this.notesCount += 1;
    let cardId = "note"+ this.sectionId +"_" +this.notesCount;
    let card = new CardStickyNote(cardId , box.value, 0);
    this.cards.push(card)
    console.log(box.value); 
    box.value = "";
    this.hidewWriteNote = true;
  }
}
