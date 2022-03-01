
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { MiniForfait } from './mini-forfait';  /* IMPORTATION DE MON INTERFACE */
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ForfaitService  {
  forfaitsUrl = 'http://localhost/api-voyages/api/';

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<MiniForfait[]> {
    return this.http.get<MiniForfait[]>(this.forfaitsUrl);
  }

  addForfait(forfait: MiniForfait): Observable<MiniForfait> {
    return this.http.post<MiniForfait>(this.forfaitsUrl, forfait, httpOptions);
  }

  editForfait(forfait: MiniForfait): Observable<MiniForfait> {
    return this.http.put<MiniForfait>(this.forfaitsUrl + "?id=" + forfait.id, forfait, httpOptions);
  }

  deleteForfait(id: string): Observable<MiniForfait> {
    return this.http.delete<MiniForfait>(this.forfaitsUrl + "?id=" +  id);
  }
}
