import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit {

  constructor(private el: ElementRef,
    private rend: Renderer2) { 

  }

  @HostListener('mouseover')
  onHover() {
    this.changeElementBgColor('rgb(113, 8, 30)'); 
}

@HostListener('mouseout')
onOut() {
  this.changeElementBgColor('rgb(215, 72, 92)');
}

ngOnInit(): void {
  this.changeElementBgColor('rgb(215, 72, 92)');
 
}

changeElementBgColor(color: string) {
  this.rend.setStyle( this.el.nativeElement,'backgroundColor', color );
}

}
