import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth: AuthService, private _router: Router , public nav: NavService){}

  ngOnInit(): void {
  }
  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
