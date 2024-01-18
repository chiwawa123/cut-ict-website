import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/models/breadcrumb';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  tree: Breadcrumb;
  constructor(
    private bread:BreadcrumbService
  ) {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'ICT Staff', link: '/staff' },
      tree:[]
    };
  }

  ngOnInit(): void {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'ICT Staff', link: '/staff' },
      tree:[]
    };
    this.bread.tree.next(this.tree);
  }

}
