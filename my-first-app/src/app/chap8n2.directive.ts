import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class Chap8n2Directive {
  constructor(private el: ElementRef, private renderer: Renderer) {}

  @HostListener('mouseenter') onmouseEnter(){
    this.border('lime', 'solid', '5px');
  }
  @HostListener('mouseleave') onmouseleave(){
    this.border();
  }
  @HostListener('wheel', ['$event']) onwheel(event: any) {
    event.preventDefault();
    if(event.deltaY > 0){
      this.changeSize(-25);
    }else if(event.deltaY < 0 ){
      this.changeSize(25);
    }
  }
  private border(
    color: string = null,
    type: string = null,
    width: string = null
  ){
    this.renderer.setElementStyle(
      this.el.nativeElement, 'border-color', color);
    this.renderer.setElementStyle(
      this.el.nativeElement, 'border-style', type);
    this.renderer.setElementStyle(
      this.el.nativeElement, 'border-width', width);
  }
  private changeSize(sizechange: any){
    let height: any = this.el.nativeElement.offsetHeight;
    let newHeight: any = height + sizechange;
    this.renderer.setElementStyle(
        this.el.nativeElement, 'height', newHeight + 'px');
  }


}
