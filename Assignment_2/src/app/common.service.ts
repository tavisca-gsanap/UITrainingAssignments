import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { CardStickyNote } from './card/card.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private messageSource = new BehaviorSubject(true);
  currentMessage = this.messageSource.asObservable();

  public hideEditNote = true;
  constructor() { }
  
  changeMessage(hideEditNote: boolean) {
    this.messageSource.next(hideEditNote)
  }

  // private cardSource = new BehaviorSubject("note_one_1");
  private cardSource = new BehaviorSubject(new CardStickyNote("asd","sdas",0));
  currentCard = this.cardSource.asObservable();

  // public card = "note_one_1";
  public card = new CardStickyNote("asd","sdas",0);

  changeCard(card : CardStickyNote) {
    this.cardSource.next(card)
  }

}
