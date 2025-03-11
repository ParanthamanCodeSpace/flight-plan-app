import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-tickets',
  standalone: false,
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css']
})  
export class BookTicketsComponent implements OnInit {
  from = '';
  to = '';
  date: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchFlights() {
    if (this.from && this.to && this.date) {
      this.router.navigate(['/available-tickets'], {
        queryParams: { from: this.from, to: this.to, date: this.date }
      });
    } else {
      alert('Please select valid From, To, and Date fields.');
    }
  }
}