import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, AfterViewInit {

  @Input() progress:number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
