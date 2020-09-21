import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMobileMenuOpen: boolean = false;

  menuItems: Array<{ title: string, items: Array<string> }> = [
    {
      title: 'inicio',
      items: []
    },
    {
      title: "repuestos",
      items: [
        "dirección",
        "bomba de dirección",
        "caja de dirección",
        "columna de dirección y volante",
        "ejes",
        "exterior",
        "interior",
        "motor",
        "refrigeración",
        "aire acondicionado y calefacción",
        "frenos",
        "sistema eléctrico",
        "suspensión",
        "transmisión",
      ]
    },
    {
      title: "genérico",
      items: []
    },
    {
      title: "boutique",
      items: []
    },
    {
      title: "ofertas",
      items: []
    }
    ,
    {
      title: "generadores",
      items: []
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onHamClicked() {
    console.log('onHamClicked()')
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

}
