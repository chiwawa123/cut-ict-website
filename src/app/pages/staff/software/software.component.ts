import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/models/breadcrumb';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {
  tree: Breadcrumb;
  constructor(
    private bread:BreadcrumbService
  ) {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'Software Section', link: '/software' },
      tree:[{ name: 'ICT Staff', link: '/staff' }]
    };
  }
  ngOnInit(): void {

    this.bread.tree.next(this.tree);
  }

}
