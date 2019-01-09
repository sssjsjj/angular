import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumCheck]'
})
export class NumCheckDirective {

private regex: RegExp = new RegExp(/[1-9]/g);
// typing = [];

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('keydown', ['$event']) onkeydown(event: KeyboardEvent) {
    // debugger
    let keyVal: string = this.el.nativeElement.value;
    console.log(keyVal + ' and ' + event.key);

    // this.typing.push(event.key);
    // console.log('배열잘드르갔나' + this.typing);

    if (!event.key.match(this.regex)) {
        alert('정수만 입력 가능 합니다.');
        // this.typing.pop();
    } else if (!keyVal.match(this.regex)) {
      // console.log('배열잘드르갔나 두번쨰' + this.typing);
      // console.log('배열다합치면 : ' + this.typing.join(''));
      this.el.nativeElement.value = '';
    }

  }

}
