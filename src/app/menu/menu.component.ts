import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // definisco 3 proprietà del componente
  link_menu_1:string;
  link_menu_2:string;

  constructor(){
    this.link_menu_1 = 'Home';
    this.link_menu_2 = 'Contatti';
  }

  ngOnInit() {
  }

}
