import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Comparador';


  num1: number | null = null;
  num2: number | null = null;
  resultado: string = '';


    verificarnumeros(){
      if (this.num1 !== null && this.num2 !== null) {
        if (this.num1 > this.num2){
          this.resultado = 'MAAIOR';
        } else if (this.num2 > this.num1){
          this.resultado = 'MENOR';
        } else
          this.resultado = 'IGUAL';
        
    }
  }
}
