import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HorecaComponent } from '../horeca/horeca.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorecaService {

   private horecaUrl: string;
 
  constructor(private http: HttpClient) {
    this.horecaUrl = 'http://localhost:8080/horeca';
  }
 
  public findAll(): Observable<HorecaComponent[]> {
    return this.http.get<HorecaComponent[]>(this.horecaUrl);
  }
}
