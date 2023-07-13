import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  implements OnInit {
  email: string=' ';
  password: string='';

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  login() {
    // Add your login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
  goToOtherPage() {
    this.router.navigateByUrl('home');
  }

}

