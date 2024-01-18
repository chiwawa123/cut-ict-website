import { BreadcrumbService } from './../../services/breadcrumb.service';

import { Component, Input, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/models/breadcrumb';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
    tree:Breadcrumb;

  constructor(
    private breadCrumbService:BreadcrumbService
  ) {
    this.tree = this.breadCrumbService.tree.value;
    console.log(this.tree);

    this.breadCrumbService.tree.subscribe(crumb=>{
      this.tree = crumb;
      window.scrollTo(0, 0)
    })
   }

  ngOnInit(): void {
  }

}
