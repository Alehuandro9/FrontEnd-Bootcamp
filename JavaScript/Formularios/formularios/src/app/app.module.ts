import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidationComponent } from './validation/validation.component';
import { ContactosModule } from './contactos/contactos.module';


@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ContactosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
