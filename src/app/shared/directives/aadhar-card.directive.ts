import { NumberSymbol } from '@angular/common';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAadharCard]'
})
export class AadharCardDirective {
  
  constructor() { }
  @HostBinding('style.border') border! :string;
  @HostListener('input', ['$event'])onKeyup(event :Event){
    let inputControl =event.target as HTMLInputElement;

    /* for removing space */
    let inputValue = inputControl.value.replace(/\s+/g,'');  /* s means space and + means multiple space */
    if(inputValue.length < 16){
      inputControl.nextElementSibling?.classList.remove('d-none')
    }

    /* for 16digit length */
    if(inputValue.length > 16 || inputValue.length === 16 ){
    inputValue = inputValue.substring(0,16)
    inputControl.nextElementSibling?.classList.add('d-none')
    }

    /* number dividing into 4 length */
    let numbers : string[] = []
    for (let i = 0; i<inputValue.length; i += 4){
      numbers.push(inputValue.substring(i, i + 4))
    }

    /* for space after 4 charactors */
    console.log(numbers)
    inputControl.value= numbers.join(' ');

    /* for allowing numbers only */
    if(/[^\d]/.test(inputValue)){  //d means decimal ... it return true  if we write any value except than decimal
      this.border ='2px solid red'
      
    }
  }
}
