import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../models/flight-model';

@Pipe({
  name: 'flightFilter',
  standalone: false,
})
export class FlightFilterPipe implements PipeTransform {
  transform(flights: Flight[], brand: string = '', maxPrice?: number): Flight[] {
    return flights.filter(flight => 
      (brand ? flight.airline === brand : true) &&
      (maxPrice ? flight.price <= maxPrice : true)
    );
  }
}
