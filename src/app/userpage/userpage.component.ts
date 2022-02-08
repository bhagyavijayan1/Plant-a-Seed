import { Component, OnInit } from '@angular/core';
import {  PlantModel} from './plants.model';
import { PlantService} from '../plant.service';
import { FootService } from '../foot.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {


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


  constructor(private plantService: PlantService , private foot: FootService) { }

  ngOnInit(): void {
    this.plantService.getPlants().subscribe((data) => {
      this.plants = JSON.parse(JSON.stringify(data));
      this.filteredPlants = this.plants;

    });
    this.foot.hide();

  }



}
