import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appProgressBarStatus]'
})
export class ProgressBarStatusDirective implements AfterViewInit{

  @Input() appProgressBarStatus:number; 

  constructor(
  	private elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
  	console.log('Progress Bar Status Directive: ', this.appProgressBarStatus, this.elementRef);
  	let className = '',
  		popularity = this.appProgressBarStatus;

  	if(popularity >= 90) {
  		className = 'high';
  	} else if(popularity >= 70) {
  		className = 'medium';
  	}

  	this.elementRef.nativeElement.className = className;
  }

}
