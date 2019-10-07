import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-horeca',
  templateUrl: './horeca.component.html',
  styleUrls: ['./horeca.component.css']
})
export class HorecaComponent implements OnInit {

  id: number;
  json_featuretype: string;
  Naam: string;
  Geometry: Array<any>;
  Formule: string;
  Straat: string;
  HuisNr: number;
  Postcode: string;
  Deelgemeente: string;
  Gemeente: string;
  Branche: string;
  Check_dat: string;
  Winkelgebied: string;
  Subcentrum: string;
  Strnmenhuisnr: string;
  Aangemaakt: string;
  json_ogc_wkt_crs: string;
  json_geometry: string;

  constructor() { 

  }

  ngOnInit() {
  }

}
