import { Breadcrumb } from 'src/app/models/breadcrumb';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

	tree: Breadcrumb;

	constructor(
    private bread:BreadcrumbService
  ) {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'ICT Services', link: 'services' },
      tree:[]
    };
    this.bread.tree.next(this.tree);

  }
  ngOnInit(): void {
  }

}
