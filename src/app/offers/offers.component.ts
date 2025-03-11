import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as bootstrap from 'bootstrap'; // Import Bootstrap
import { ApiService } from '../services/api.service';


interface Offer {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-offers',
  standalone: false,
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit {
  offers: Offer[] = [];
  selectedOffer: Offer | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getOffers().subscribe(
      (data) => (this.offers = data),
      (error) => console.error(error)
    );
  }

  openModal(offer: Offer) {
    this.selectedOffer = offer;
    const modalElement = document.getElementById('offerModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}