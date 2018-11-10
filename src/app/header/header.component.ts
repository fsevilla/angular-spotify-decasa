import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../global/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
  	private authService: AuthService,
  	private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
  	this.authService.clearToken();
  	this.router.navigate(['/login']);

  }

}
