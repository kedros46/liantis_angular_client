import { Component, OnInit } from '@angular/core';

import { HorecaComponent } from '../horeca/horeca.component';
import { HorecaService } from '../service/horeca-service.service';


@Component({
  selector: 'app-horeca-list',
  templateUrl: './horeca-list.component.html',
  styleUrls: ['./horeca-list.component.css']
})
export class HorecaListComponent implements OnInit {

  horeca: HorecaComponent[];

  constructor(private horecaService: HorecaService) { }

  ngOnInit() {

    this.horecaService.findAll().subscribe(data => {
      this.horeca = data;
    });
  }
}
