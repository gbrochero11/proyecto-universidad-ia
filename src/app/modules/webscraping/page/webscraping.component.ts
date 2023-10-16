import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-webscraping',
  templateUrl: './webscraping.component.html',
  styleUrls: ['./webscraping.component.css']
})
export class WebscrapingComponent implements OnInit {

  URL = 'https://cul-my.sharepoint.com/personal/grbrocherog_ul_edu_co/_layouts/15/embed.aspx?UniqueId=2489cd72-0ef4-459c-b59e-7081613a351c'

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
}