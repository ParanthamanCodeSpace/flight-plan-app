import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4600'; // Base URL for JSON Server

  constructor(private http: HttpClient) {}

  // Fetch all flights
  getFlights(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Flights`).pipe(catchError(this.handleError));
  }

  // Fetch all offers
  getOffers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Offers`).pipe(catchError(this.handleError));
  }

  // Centralized error handling
  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}
