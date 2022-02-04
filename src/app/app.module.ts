import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChipComponent } from './chip/chip.component';
import { ChipListComponent } from './chip-list/chip-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipComponent,
    ChipListComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
