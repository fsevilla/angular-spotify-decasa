import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl:string = 'https://jsonplaceholder.typicode.com/';

  songs:Array<string> = [
  	'lorem',
  	'lorem2',
  	'lorem3',
  	'lorem4',
  	'lorem5'
  ];

  constructor(
  	private httpClient:HttpClient
  ) { }

  searchSongs() {
  	return this.songs.slice(0);
  }

  getAlbums():Promise<any> {
    let url = `${this.apiUrl}albums`;

    return this.httpClient.get(url).toPromise();
  }

  getAlbum(albumId:number):Promise<any> {
  	let url = `${this.apiUrl}albums/${albumId}`;

  	// Hacer la llamada http
  	return this.httpClient.get(url).toPromise();
  }
}
