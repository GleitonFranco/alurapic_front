import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Photo} from '../photo/photo';
import {Injectable} from '@angular/core';
import {PhotoService} from '../photo.service';


@Injectable({providedIn: 'root'})
export class PhotosResolver implements Resolve<Observable<Photo[]>> {

  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    const userName = route.params.userName;
    return this.service.listFromUserPaginated(userName, 1);
  }

}
