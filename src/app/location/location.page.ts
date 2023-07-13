import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToServicePage() {
    this.router.navigateByUrl('service');
  }
  goToHomePage() {
    this.router.navigateByUrl('home');
  }
  goToAboutPage() {
    this.router.navigateByUrl('about');
  }
  goToPortfolioPage() {
    this.router.navigateByUrl('portfolio');
  }
  goToLocationPage() {
    this.router.navigateByUrl('location');
  }

}
