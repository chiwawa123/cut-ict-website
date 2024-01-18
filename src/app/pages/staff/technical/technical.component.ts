import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/models/breadcrumb';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss']
})
export class TechnicalComponent implements OnInit {

  tree: Breadcrumb;
  constructor(
    private bread:BreadcrumbService
  ) {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'Technical Section', link: '/software' },
      tree:[{ name: 'ICT Staff', link: '/staff' }]
    };
  }
  ngOnInit(): void {

    this.bread.tree.next(this.tree);
  }

}
