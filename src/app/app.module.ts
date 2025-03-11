import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomeComponent } from './home/home.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { OffersComponent } from './offers/offers.component';
import { AvailableTicketsComponent } from './book-tickets/available-tickets/available-tickets.component';
import { FlightFilterPipe } from './pipes/flight-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    BookTicketsComponent,
    OffersComponent,
    AvailableTicketsComponent,
    FlightFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
