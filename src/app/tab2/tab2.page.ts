import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  ngOnInit(){
    let numero = 10;
   debugger;
    numero = numero + 15;
    console.log(numero);
  }

}
