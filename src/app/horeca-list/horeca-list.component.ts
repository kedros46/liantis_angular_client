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
  filteredItems: HorecaComponent[];

  constructor(private horecaService: HorecaService) { }

  ngOnInit() {

    this.horecaService.findAll().subscribe(data => {
      this.horeca = data;
    });

    this.filterItem(null);
  }

  filterItem(value: any) {
    if (!value) {
        this.assignCopy();
    } else {
      this.filteredItems = Object.assign([], this.horeca)
        .filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
  }

  assignCopy() {
    this.filteredItems = Object.assign([], this.horeca);
  }
}
