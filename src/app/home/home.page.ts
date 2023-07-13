import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToServicePage() {
    this.router.navigateByUrl('service');
  }
  goToAboutPage() {
    this.router.navigateByUrl('about');
  }
  goToHomePage() {
    this.router.navigateByUrl('home');
  }
  goToPortfolioPage() {
    this.router.navigateByUrl('portfolio');
  }
  goToLocationPage() {
    this.router.navigateByUrl('portfolio');
  }

}
