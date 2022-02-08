import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FootService } from '../foot.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginUserDetails = {
      email : ``,
      password : ``
    };

  constructor(private _auth: AuthService , private _router: Router , private foot: FootService){ }

  loginUser(){
    this._auth.loginUser(this.loginUserDetails)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res['token']);
        if (this.loginUserDetails.email === 'admin@plantaseed.com' && this.loginUserDetails.password === 'admin123')
        {
        this._router.navigate(['/admin']);
        }
        else{
          this._router.navigate(['/user']);
        }
      },
      err => {
        console.log(err);
        alert(err.error);

      }
    );
  }

  ngOnInit(): void {
    this.foot.hide();

  }

}
