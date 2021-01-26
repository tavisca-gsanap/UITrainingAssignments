import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input('sectionId') sectionId: any;
  writeNote = true;
  
  constructor() { }

  ngOnInit(): void {
    this.writeNote = true;
  }


}
