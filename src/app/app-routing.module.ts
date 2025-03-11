import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { OffersComponent } from './offers/offers.component';
import { AvailableTicketsComponent } from './book-tickets/available-tickets/available-tickets.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'book-tickets', component: BookTicketsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'available-tickets', component: AvailableTicketsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
