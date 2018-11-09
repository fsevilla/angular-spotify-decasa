import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from './../global/services/spotify.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  code:string;

  constructor(
  	private activatedRoute: ActivatedRoute,
  	private spotifyService: SpotifyService
  ) {
  	this.activatedRoute.queryParams.subscribe(params => {
  		this.code = params.code;
  	});
  }

  ngOnInit() {
  	this.spotifyService.getToken(this.code)
  		.then()
  		.catch(error => {
  			console.error(error);
  		});
  }

}
