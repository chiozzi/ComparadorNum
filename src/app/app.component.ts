import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comparador';

  num1: number | null = null;
  num2: number | null = null;
  resultado: string = '';
  comparacao: string = '';

  verificarnumeros() {
    if (this.num1 !== null && this.num2 !== null) {
      if (this.num1 > this.num2) {
        this.resultado = 'O primeiro número é MAIOR que o segundo.';
        this.comparacao = `${this.num1} > ${this.num2}`;
      } else if (this.num2 > this.num1) {
        this.resultado = 'O primeiro número é MENOR que o segundo.';
        this.comparacao = `${this.num2} > ${this.num1}`;
      } else {
        this.resultado = 'O primeiro número é IGUAL ao segundo.';
        this.comparacao = `${this.num1} = ${this.num2}`;
      }
    }
  }
}
