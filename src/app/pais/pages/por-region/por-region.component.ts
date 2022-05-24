import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
    margin-right: 5px;
  }
  `
  ]
})
export class PorRegionComponent {

  paises: Country[] = [];

  regiones:string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL',
   'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';

  constructor(private paisService:PaisService) { }

  getClaseCSS(region:string):string{
    return (region === this.regionActiva) 
    ? 'btn btn-primary' 
    : 'btn btn-outline-primary';
  }

  activarRegion(region:string){
    if(region === this.regionActiva){return;}
    
    this.paisService.buscarRegion(region)
    .subscribe(paises => this.paises = paises);

    this.paises = [];
    
    this.regionActiva=region;
  }
  

}
