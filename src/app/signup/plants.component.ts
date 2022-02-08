import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FootService } from '../foot.service';


@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  constructor(private _router: Router , private foot: FootService) { }

  send(){
    this._router.navigate(['/signup']);
  }

  ngOnInit() {
    this.foot.hide();

  }

}
