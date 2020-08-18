import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComparerComponent } from './image-comparer/image-comparer.component';
import { PercentWithSignPipe } from './pipes/percent-with-sign.pipe';
import { BytesPipe } from './pipes/bytes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageComparerComponent,
    PercentWithSignPipe,
    BytesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
