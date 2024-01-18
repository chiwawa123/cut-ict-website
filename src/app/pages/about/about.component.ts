import { BreadcrumbService } from './../../services/breadcrumb.service';
import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/models/breadcrumb';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	tree: Breadcrumb;

	constructor(
    private bread:BreadcrumbService
  ) {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'about', link: 'about' },
      tree:[]
    };
    this.bread.tree.next(this.tree);

  }

	ngOnInit(): void {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'about', link: 'about' },
      tree:[]
    };
	}

}
