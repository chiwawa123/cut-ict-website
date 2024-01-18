import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'src/app/models/breadcrumb';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {
  tree: Breadcrumb;
  director:boolean = false;
  constructor(
    private bread:BreadcrumbService,
    private router : Router
  ) {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'Director', link: 'director' },
      tree:[{name:"About",link:'/about'}]
    };
    this.bread.tree.next(this.tree);

   }

  ngOnInit(): void {

    console.log(this.router.url);
    if (this.router.url =="/about/director") {
      this.director = true;
    }
  }

}
