import {Component, inject} from '@angular/core';
import {DataService} from "../service/data.service";
import {PeriodicElement} from "../interfaces/IPeriodicElement";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent {
  service =inject(DataService);
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement | null = null;
  dataSource = this.service.getData();
}
