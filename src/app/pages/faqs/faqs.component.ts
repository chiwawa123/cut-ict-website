import { ServerDetails } from './../../models/server-details';
import { FaqServices } from './../../services/faq-services.service';
import { FaqQuestion } from './../../models/faq-question';
import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/models/breadcrumb';
import { FaqCategory } from 'src/app/models/faq-category';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  tree: Breadcrumb;
  faqsCategories:FaqCategory[] = [];
  faqQuestions:FaqQuestion[] = [];
  filteredQuestions:FaqQuestion[] = [];
  serverDetails:ServerDetails = new ServerDetails();
	constructor(
    private bread:BreadcrumbService,
    private faqService:FaqServices
  ) {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'FAQs', link: 'faqs' },
      tree:[]
    };
    this.bread.tree.next(this.tree);


    faqService.getCategories().subscribe(faqs =>{
      this.faqsCategories = faqs;
      console.log(faqs);

      if(this.faqsCategories.length>0){
        this.changeCategory(this.faqsCategories[0]); //load the first category
      }
    })

  }

  changeCategory(cat:FaqCategory){
    this.faqQuestions = cat.questions;
  }


  ngOnInit(): void {
  }

}
