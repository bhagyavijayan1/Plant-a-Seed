import { Pipe, PipeTransform } from '@angular/core';
import { PlantModel } from './userpage/plants.model';

@Pipe({
  name: 'plantFilter',
  pure: false
})
export class PlantFilterPipe implements PipeTransform {
  private counter = 0;

  transform(plants: PlantModel[], searchTerm: string): PlantModel[] {
    this.counter++;
    console.log('Filter pipe executed count', + this.counter);
    if (!plants || !searchTerm){
        return plants;
      }

    return plants.filter(plant =>
        (plant.location.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ||
        (plant.plantName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));
      }
  }


