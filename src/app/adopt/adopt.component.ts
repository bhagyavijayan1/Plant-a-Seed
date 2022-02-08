import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FootService } from '../foot.service';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  constructor(private _router: Router , private foot: FootService) { }
  userDetails = {
    full_name : ``,
    email : ``,
    address : ``,
    phone : ``,
    location : ``,
    zip : ``
  };

  ngOnInit(): void {
    this.foot.hide();

  }

  adopt(){
    console.log(this.userDetails);
    if (this.userDetails === null){
      alert('Please fill the fields');
    }
    else {
      alert('Thanks for being the part of the community!!Happy Planting!!');
      this._router.navigate(['/user']);
    }

  }
}
