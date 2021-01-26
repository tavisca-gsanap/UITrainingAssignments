import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { StoreModule } from '@ngrx/store';
import { CommonService } from './common.service';
import { SectionComponent } from './section/section.component';
import { reducer } from './common.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({message : reducer})
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
