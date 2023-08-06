import { Component } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li *ngFor="let department of departments">
        <span class="badge">{{ department.id }}</span>{{ department.name }}
      </li>
    </ul>
  `,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "X"},
    {"id": 3, "name": "Y"}
  ];

}
