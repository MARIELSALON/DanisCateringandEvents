import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHomePage() {
    this.router.navigateByUrl('home');
  }
  goToServicePage() {
    this.router.navigateByUrl('service');
  }
  goToPortfolioPage(){
    this.router.navigateByUrl('portfolio');
  }
  goToLocationPage(){
    this.router.navigateByUrl('location');
  }
  goToAboutPage(){
    this.router.navigateByUrl('about');
  }
}
