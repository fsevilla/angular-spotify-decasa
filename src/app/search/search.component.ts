import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title:string = 'Busqueda';
  artistName:string;

  constructor(
  	private router: Router
  ) { }

  ngOnInit() {
  }

  searchArtists() {
  	this.router.navigate(['/artists'], {
      queryParams: {
        name: this.artistName
      }
    });
  }

}
