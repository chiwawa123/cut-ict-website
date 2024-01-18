import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/models/breadcrumb';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  tree: Breadcrumb;
  constructor(
    private bread:BreadcrumbService
  ) {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'Operations Section', link: '/software' },
      tree:[{ name: 'ICT Staff', link: '/staff' }]
    };
  }
  ngOnInit(): void {

    this.bread.tree.next(this.tree);
  }

}
