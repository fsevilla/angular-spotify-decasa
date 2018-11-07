import { Component, OnInit } from '@angular/core';

import { SearchService } from './../search/search.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums:any[] = [];

  constructor(
  	private searchService: SearchService
  ) { }

  ngOnInit() {
  	this.getAlbums();
  }

  getAlbums() {
  	this.searchService.getAlbums()
  		.then(res => {
  			this.albums = res;
  		})
  		.catch(error => {
  			console.error('Something failed: ', error);
  		});
  }

}
