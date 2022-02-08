import { Component, OnInit , ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlantService } from '../plant.service';
import { Router } from '@angular/router';
import { PlantModel } from '../userpage/plants.model';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { FootService } from '../foot.service';
import { Location } from '@angular/common';
import { NavService } from '../nav.service';




@Component({
  selector: 'app-donateplant',
  templateUrl: './donateplant.component.html',
  styleUrls: ['./donateplant.component.css']
})
export class DonateplantComponent implements OnInit {
  constructor(private plantService: PlantService , private router: Router , private fb: FormBuilder ,
              private foot: FootService , private _location: Location , private nav: NavService) { }
// plantItem = new PlantModel(null, null, null, null, null, null);
percentDone: any = 1;

form: FormGroup = this.fb.group({
  plantName : ['', Validators.required],
  category: ['', Validators.required],
  description: ['', Validators.required],
  location: ['', Validators.required],
  // availability: ['', Validators.required],
  imageUrl: [null],
});

selectImage(event){
  const uploadedFile = (event.target as HTMLInputElement).files[0]; // getting file
  this.form.patchValue({ imageUrl: uploadedFile }); // patching form data and adding the file
  this.form.get('imageUrl').updateValueAndValidity(); // check validity

  }




Donate() {
  if (this.form.valid) {
    this.plantService.newPlant(this.form.value, this.form.value.imageUrl).subscribe((event: HttpEvent<any>) => {
      // console.log(event);
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!' + HttpEventType.Sent);
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!' + HttpEventType.ResponseHeader);
          break;
        case HttpEventType.UploadProgress:
          this.percentDone = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.percentDone}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
      }
      this.form.reset();
      // this.router.navigate(['/list-users']);
    });
  }
  alert('Donate Success');
  this._location.back();
  this.nav.show();
  // this.plantService.newPlant(this.plantItem, this.images);
  // alert('Success');
  // this.router.navigate(['/user']);


}


ngOnInit(): void {
  this.foot.hide();
  this.nav.hide();

}

home(){
  this._location.back();
  this.nav.show();

}

}
