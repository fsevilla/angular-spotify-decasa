import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpotifyService } from './../global/services/spotify.service';
import { AuthService } from './../global/services/auth.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  code:string;

  constructor(
  	private activatedRoute: ActivatedRoute,
  	private spotifyService: SpotifyService,
  	private authService: AuthService,
  	private router: Router
  ) {
  	this.activatedRoute.queryParams.subscribe(params => {
  		this.code = params.code;
  	});
  }

  ngOnInit() {
  	this.spotifyService.getToken(this.code)
  		.then(res => {
  			this.authService.setToken(res);
  			this.router.navigate(['/']);
  		})
  		.catch(error => {
  			console.error(error);
  		});
  }

}
