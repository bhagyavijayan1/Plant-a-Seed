import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FootService } from '../foot.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _router: Router , private foot: FootService) { }

  send(){
    this._router.navigate(['/']);
  }

  ngOnInit(): void {
    this.foot.hide();

  }
  ngOnDestroy(){
    document.body.className="selector";
  }

}
