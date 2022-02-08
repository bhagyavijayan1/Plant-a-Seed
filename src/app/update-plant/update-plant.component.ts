import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../plant.service';
import { NavService } from '../nav.service';
import { FootService } from '../foot.service';

@Component({
  selector: 'app-update-plant',
  templateUrl: './update-plant.component.html',
  styleUrls: ['./update-plant.component.css']
})
export class UpdatePlantComponent implements OnInit {
constructor(private plantService: PlantService , private router: Router, private fb: FormBuilder,
            private actRoute: ActivatedRoute , private nav: NavService , private foot: FootService) { }

  editForm: FormGroup = this.fb.group({
    plantName : ['', Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
    location: ['', Validators.required],
    availability: ['', Validators.required],
    imageUrl: [null],
  });

  plantItem: any = {};
  paramId: any;
  imagePreview: any;

  selectImage(event){
    const uploadedFile = (event.target as HTMLInputElement).files[0]; // getting file
    this.editForm.patchValue({ imageUrl: uploadedFile }); // patching form data and adding the file
    this.editForm.get('imageUrl').updateValueAndValidity(); // check validity

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(uploadedFile);
  }

  update() {
    this.plantService.updatePlant(this.paramId, this.editForm.value).subscribe(res => {
      this.router.navigate(['/admin']);
      console.log(res);
    });
  }

    ngOnInit(){
    this.actRoute.params.subscribe(params => {
      this.plantService.editPlant(params[`id`]).subscribe(res => {
        this.plantItem = res;
        this.paramId = params[`id`];
      });
    });

    this.nav.hide();
    this.foot.hide();


  }

}
