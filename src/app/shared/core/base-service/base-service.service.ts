import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Character } from '../../models/character.model';
import { Logger } from '.././error-logger/logger.service';
import { Thumbnail } from '../../models/thumbnail.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private logger: Logger) {}

  getHeroDetailsUrl(character: Character): string {
    const detail = character.urls.find(url => url.type === 'detail');
    return detail ? detail.url : 'http://marvel.com';
  }

  getImage(variant: string, thumbnail: Thumbnail): string {
    return `${thumbnail.path}/${variant}.${thumbnail.extension}`;
  }

  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      throw error;
    } else {
      this.logger.error('Something bad happened; please try again later.', error, environment.settings.appErrorPrefix);
    }
    return throwError(error);
  }
}
