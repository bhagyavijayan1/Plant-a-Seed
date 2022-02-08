import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { PlantModel } from './userpage/plants.model';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  headers = new HttpHeaders().set('Content-type', 'application/json');

  constructor(private http: HttpClient) { }
  getPlants(){
    return this.http.get('http://localhost:5000/user');
  }

  newPlant(PlantData: any, profileImage: File): Observable <any> {
    console.log("hi");
    const formData: any = new FormData();
    formData.append('plantName' , PlantData.plantName);
    formData.append('category' , PlantData.category);
    formData.append('description' , PlantData.description);
    formData.append('location' , PlantData.location);
    formData.append('availability' , PlantData.availability);
    formData.append('imageUrl', profileImage);
    console.log(formData);
    return this.http.post<PlantModel>(`http://localhost:5000/user/insert`, formData,
    {
      reportProgress: true,
      observe: 'events'

    });
  }

  deletePlant(id) {
    return this.http.post(`http://localhost:5000/user/delete`, {id: id});
}

editPlant(id){
  return this.http.get<any>(`http://localhost:5000/user/edit/${id}`);

}

updatePlant(id, PlantData){
  const updateFormData: any = new FormData();
  updateFormData.append('plantName' , PlantData.plantName);
  updateFormData.append('category' , PlantData.category);
  updateFormData.append('description' , PlantData.description);
  updateFormData.append('location' , PlantData.location);
  updateFormData.append('availability' , PlantData.availability);
  updateFormData.append('imageUrl', PlantData.imageUrl);
  return this.http.post(`http://localhost:5000/user/update/${id}` , updateFormData);

}

}
