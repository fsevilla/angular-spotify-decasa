import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from './../global/services/spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artistName:string;
  artists:any[];
  noResults:boolean;

  constructor(
  	private activatedRoute: ActivatedRoute,
  	private spotifyService: SpotifyService,
  	private router: Router
  ) {
  }

  ngOnInit() {
  	this.activatedRoute.queryParams.subscribe(params => {
  		this.artistName = params.name;

  		if(!params.name) {
  			this.router.navigate(['/']);
  			return;
  		}

  		this.getArtists();
  	});
  }

  getArtists() {
  	this.spotifyService.searchArtists(this.artistName)
  			.then(res => {
  				this.artists = res.artists.items;
  				if(this.artists.length === 0) {
  					this.noResults = true;
  				} else {
  					this.noResults = false;
  				}
  			})
  			.catch(error => {
  				console.error(error);
  			});
  }

}
