import { Directive, ElementRef, OnInit, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorPrice]'
})
export class ColorPriceDirective implements OnInit {

  @Input()
  price:number;

  constructor(private Element: ElementRef , private renderer:Renderer2) {
    console.log(this.price);
    
  }

 ngOnInit(){
    console.log(this.price);
    if(this.price<10){
      this.Element.nativeElement.style.color= "white";
    }else if (this.price<40){
      this.Element.nativeElement.style.color= "lawngreen";
    }else{
      this.Element.nativeElement.style.color= "blue";
    }
  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log("mouseenter");
    this.renderer.addClass(this.Element.nativeElement, 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    console.log("mouseleave");
    this.renderer.removeClass(this.Element.nativeElement, 'red');
  }
}
