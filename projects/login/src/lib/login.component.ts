import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'cnxlogin-login',
  template: `
    <p>
    hola este es el componente de la libreria {{textoingresado}}
    <h1>{{otravariable}}</h1>
    </p>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @Input() public textoingresado : string;
  @Input() public otravariable : string;



  constructor() {
    this.textoingresado = "";
    this.otravariable = "";

  }

  ngOnInit(): void {
  }

}
