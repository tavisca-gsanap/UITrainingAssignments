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

  private cardSource = new BehaviorSubject(CardStickyNote);
  currentCard = this.cardSource.asObservable();

  public card = new CardStickyNote("as","avsvsau",0);

  changeCard(card = CardStickyNote) {
    this.cardSource.next(card)
  }

}
