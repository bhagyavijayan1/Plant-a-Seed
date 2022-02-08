import { Component, OnInit } from '@angular/core';
import {  PlantModel} from '../userpage/plants.model';
import { PlantService} from '../plant.service';
import { NavService } from '../nav.service';
import { FootService } from '../foot.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title: string = 'Plant-List' ;
  plants: PlantModel[];

  // Image Properies
  imageWidth: number = 180;
  imageMargin: number = 2;

  filteredPlants: PlantModel[];
  private _searchTerm: string;

  get searchTerm(): string{
    return this._searchTerm;
  }

  set searchTerm(value: string){
    this._searchTerm = value;
    this.filteredPlants = this.filterPlants(value);
  }

  filterPlants(searchString: string){
    return this.plants.filter(plant => (plant.location.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) ||
    (plant.plantName.toLowerCase().indexOf(searchString.toLowerCase()) !== -1));
  }


  constructor(private plantService: PlantService , private nav: NavService , private foot: FootService ,
              private _router : Router, public _auth: AuthService , private _location: Location ) { }

  ngOnInit(): void {
    this.getPlants();
    this.nav.hide();
    this.foot.hide();


  }

  getPlants(){
    this.plantService.getPlants().subscribe((data) => {
      this.plants = JSON.parse(JSON.stringify(data));
      this.filteredPlants = this.plants;

    });
  }

  deletePlant(id) {
    if (confirm('Do you want to delete this user..?'))
    {
      this.plantService.deletePlant(id).subscribe(res => {
        console.log(res);
        this.getPlants();
      });
    }

    else { console.log('Delete canceled,..!'); }
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/']);
    this.nav.show();
  }
}
