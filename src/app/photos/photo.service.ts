import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Photo} from "./photo/photo";

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService {
  constructor(private http: HttpClient) {
  }

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`${API}/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().set('page', page.toString());
    return this.http.get<Photo[]>(`${API}/${userName}/photos`, {params});
  }

}
