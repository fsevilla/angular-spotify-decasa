import { Component, OnInit } from '@angular/core';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	const { clientID, redirectUri, spotifyAccountUrl} = environment;
	const loginUrl = `${spotifyAccountUrl}authorize?response_type=code&client_id=${clientID}&redirect_uri=${redirectUri}`;

	window.location.href = loginUrl;
  }

}
