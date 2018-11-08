import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { SearchService } from './../../search/search.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  albumId:number;
  album:any = {};
  artist:any = {};

  isLoaded:boolean;

  constructor(
  	private activatedRoute: ActivatedRoute,
  	private searchService: SearchService,
  	private router: Router,
  	private location: Location
  ) {
  	this.activatedRoute.params.subscribe(params => {
  		this.albumId = params.id;
  	});
  }

  ngOnInit() {
  	this.getAlbumDetails();
  }

  getAlbumDetails() {
  	this.searchService.getAlbum(this.albumId)
  		.then(res => {
  			this.album = res;

  			return this.searchService.getArtist(res.userId);
  		})
  		.then(res => {
  			this.artist = res;
  			this.isLoaded = true;
  		})
  		.catch(error => {
  			console.error('Error: ', error);
  			this.isLoaded = true;
  		});
  }

  goBack() {
  	// this.router.navigate(['/albums']);
  	this.location.back();
  }

}

// /search/:id/algo?q=search <-- queryParam
//          ^- url param


// function (params) {
// 	console.log(params.id);
// }