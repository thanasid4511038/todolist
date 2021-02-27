import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { InputComponent } from './component/input/input.component';
import { DisplayComponent } from './component/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
