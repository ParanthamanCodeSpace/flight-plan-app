import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../../models/flight-model';

@Component({
  selector: 'app-available-tickets',
  standalone: false,
  templateUrl: './available-tickets.component.html',
  styleUrl: './available-tickets.component.css'
})
export class AvailableTicketsComponent implements OnInit {
  from: string = '';
  to: string = '';
  date: string = '';
  flights: Flight[] = [];
  filteredFlights: Flight[] = [];
  airlineBrands: string[] = [];

  selectedAirline: string = '';
  maxPrice?: number;

  apiUrl: string = 'http://localhost:4600/Flights';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.from = params['from'];
      this.to = params['to'];
      this.date = params['date'];
      this.fetchFlights();
    });
  }

  fetchFlights() {
    const url = `${this.apiUrl}?from=${encodeURIComponent(this.from)}&to=${encodeURIComponent(this.to)}`;
    this.http.get<Flight[]>(url).subscribe((data) => {
      const inputDate = new Date(this.date).toISOString().split('T')[0];

      // Filter flights by departure date
      this.flights = data.filter(flight => flight.departureTime.startsWith(inputDate));

      // Extract unique airline brands for the dropdown
      this.airlineBrands = [...new Set(this.flights.map(flight => flight.airline))];

      // Apply filters initially
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredFlights = this.flights.filter(flight =>
      (!this.selectedAirline || flight.airline === this.selectedAirline) &&
      (!this.maxPrice || flight.price <= this.maxPrice) // Fixing the price filter logic
    );
  }

  bookTickets(flight: Flight) {
    alert(`Tickets booked for ${flight.airline}!`);
    console.log(`Booking Details:`, { flight });
  }
}
