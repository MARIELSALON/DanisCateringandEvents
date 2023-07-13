import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

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
  goToWeddingPackage(){
    this.router.navigateByUrl('weddingpackage');
  }
  goToCateringPackage(){
    this.router.navigateByUrl('cateringpackage');
  }
  goToBirthdayPackage(){
    this.router.navigateByUrl('birthdaypackage');
  }
}
