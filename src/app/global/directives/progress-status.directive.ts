import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appProgressStatus]'
})
export class ProgressStatusDirective implements AfterViewInit {

  @Input() appProgressStatus:number;

  constructor(
  	private elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
  	console.log('Progress directive', this.appProgressStatus, this.elementRef);
  	this.elementRef.nativeElement.style.width = this.appProgressStatus+'%';

  	let className = '';

  	if(this.appProgressStatus > 90 ) {
  		className = ' high';
  		console.log('Mayor a 90');
  	} else if(this.appProgressStatus > 70) {
  		className = ' medium';
  		console.log('Mayor a 70', className);
  	} else {
  		console.log('Mayor a ninguno');
  	}

  	this.elementRef.nativeElement.className += className;
  }

}
