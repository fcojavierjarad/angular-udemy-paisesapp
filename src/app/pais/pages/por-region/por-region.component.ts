import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {
regiones:string[]=['EU', 'CARICOM', 'EFTA','PA','AU','USAN','EEU'];
regionActiva:string='';
paises:Country[]=[];
  constructor(private paisService:PaisService
    ) { }


  getClassCSS(region:string){
    return (this.regionActiva===region)?'btn btn-primary m-1':'btn btn-outline-primary m-1'
  }
  activarRegion(region:string){

  if(region===this.regionActiva){return;} 

  this.regionActiva=region;
  this.paises=[];
  this.paisService.buscarRegion(region)
  .subscribe((paises:Country[])=>{
    this.paises=paises;

  })
  
   
  }

 

}
