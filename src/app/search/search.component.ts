import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../global/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title:string = 'Busqueda';
  artistName:string;

  constructor(
  	private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
  }

  searchArtists() {
  	console.log('do search', this.artistName);
  	this.spotifyService.searchArtists(this.artistName)
  		.then(res => {
  			console.log('Response: ', res);
  		})
  		.catch(error => {
  			console.error('Error: ', error);
  		});
  }

}
