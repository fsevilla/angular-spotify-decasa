import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from './../../global/services/spotify.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  artistId:string;
  artist:any = {};
  isDataLoaded:boolean;
  imageUrl:string;

  constructor(
  	private activatedRoute: ActivatedRoute,
  	private spotifyService: SpotifyService,
  	private location: Location
  ) {
  	this.activatedRoute.params.subscribe(params => {
  		this.artistId = params.id;
  	});
  }

  ngOnInit() {
  	console.log('Artist ID: ', this.artistId);
  	this.spotifyService.getArtist(this.artistId)
  		.then(res => {
  			console.log('Response: ', res);
  			this.artist = res;
  			this.imageUrl = res.images[res.images.length-1].url;
  			this.isDataLoaded = true;
  		})
  		.catch(error => {
  			console.error('Error', error);
  		});
  }

  goBack() {
  	this.location.back();
  }

}
