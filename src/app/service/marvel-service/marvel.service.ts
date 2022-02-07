import { Character, CharactersResponse } from './../../shared/models/characters.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { BaseService } from '../../shared/core/base-service/base-service.service';
import { Heroes } from '../../shared/models/heroes.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  getCharters() : Observable<CharactersResponse>{
    return this.http.get<CharactersResponse>(`${environment.apiUrl}/characters`)
  }

  getCharterId(characterId: number): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/characters/${characterId}`)
      .pipe(
        pluck('data','results'),
        catchError(this.baseService.handleError)
      );
  }

}
