import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

numeroConcatenar: string;
number1: number;
number2: number;
operador: string;
  constructor() {
    this.numeroConcatenar= '0.0';
  }

  generarOperacion(simbolo: string)
  {
    let resultado: number;

if(simbolo === '=')
{
  this.number2 =Number(this.numeroConcatenar);
  if(this.operador === '/')
  {
resultado = this.number1/this.number2;
  }
  if(this.operador === '+')
  {
resultado = this.number1+this.number2;
  }
  if(this.operador === '-')
  {
resultado = this.number1-this.number2;
  }
  if(this.operador === '*')
  {
resultado = this.number1*this.number2;
  }
  if(this.operador === '1/x')
  {
resultado = 1/(this.number1+this.number2);
  }
  if(this.operador === 'x²')
  {
resultado = (this.number1+this.number2)*(this.number1+this.number2);
  }
  if(this.operador === 'sqrt')
  {
resultado = Math.sqrt((this.number1+this.number2));
  }
  this.numeroConcatenar=resultado+'';
}else{
  this.number1 =Number(this.numeroConcatenar);
this.operador=simbolo;
this.numeroConcatenar='0.0';
}
  }
concatenarNumero(numero: string)
{
  if(this.numeroConcatenar === '0.0')
  {
    this.numeroConcatenar = numero;
  }else{
    this.numeroConcatenar= this.numeroConcatenar + numero;
  }

}
metodoC(){
  this.numeroConcatenar='0.0';
}
}
