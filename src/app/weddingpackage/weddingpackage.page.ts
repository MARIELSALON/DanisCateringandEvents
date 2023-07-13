import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weddingpackage',
  templateUrl: './weddingpackage.page.html',
  styleUrls: ['./weddingpackage.page.scss'],
})
export class WeddingpackagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHomePage() {
    this.router.navigateByUrl('home');
  }
  goToAboutPage() {
    this.router.navigateByUrl('about');
  }
  goToServicePage() {
    this.router.navigateByUrl('service');
  }
  goToPortfolioPage() {
    this.router.navigateByUrl('portfolio');
  }
  goToLocationPage() {
    this.router.navigateByUrl('location');
  }
  goToWeddingPackage() {
    this.router.navigateByUrl('weddingpackage');
  }
  goToCateringPackage() {
    this.router.navigateByUrl('cateringpackage');
  }
  goToBirthdayPackage() {
    this.router.navigateByUrl('birthdaypackage');
  }
}
