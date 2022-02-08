import { Component, OnInit } from '@angular/core';
import { FootService } from '../foot.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private foot: FootService) { }

  ngOnInit(): void {
    this.foot.hide();
  }

}
