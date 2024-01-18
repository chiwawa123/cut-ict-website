import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/models/breadcrumb';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

	tree: Breadcrumb;

	constructor(
    private bread:BreadcrumbService
  ) {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'downloads', link: 'downloads' },
      tree:[]
    };
    this.bread.tree.next(this.tree);

  }

	ngOnInit(): void {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'downloads', link: 'downloads' },
      tree:[]
    };
	}
}
