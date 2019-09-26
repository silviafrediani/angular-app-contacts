// importo Injectable che permetterà ad Angular di "riconoscerla"
// come classe da poter usare grazie al meccanismo del “Dependency Injection”.
import { Injectable } from '@angular/core';
// importo interface
import { Contatto } from './interfaces/contatto';
// importo servizi http
import { HttpClient, HttpHeaders } from '@angular/common/http';
// importo Observable per flusso dati asincrono
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  private apiGetUrl1 = 'http://www.silviafrediani.it/angular_app/api/legge-db.php';
  private apiGetUrl2 = 'http://www.silviafrediani.it/angular_app/api/legge-db-id.php';
  private apiPostUrlInvia = 'http://www.silviafrediani.it/angular_app/api/invia-db.php';
  private apiPostUrlModifica = 'http://www.silviafrediani.it/angular_app/api/aggiorna-db.php';
  private apiPostUrlElimina = 'http://www.silviafrediani.it/angular_app/api/elimina-db.php';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  // inietto servizio HttpClient nel costruttore
  constructor(public http: HttpClient) { }


  getListaContatti(): Observable<Contatto[]> {
    return this.http.get<Contatto[]>(this.apiGetUrl1).pipe( map(risposta => risposta) );
  }
  getContatto(idct: string): Observable<Contatto> {
    return this.http.get<Contatto>(this.apiGetUrl2 + '?id='+idct).pipe( map(risposta => risposta) );
  }
  addContatto(contatto): Observable<Contatto> {
    console.log(contatto);
    return this.http.post<Contatto>(this.apiPostUrlInvia, contatto).pipe(
      map(risposta => risposta),
      // catchError(this.handleError<Contatto>('addContatto'))
    );
  }
  updateContatto(contatto): Observable<Contatto> {
    console.log(contatto);
    return this.http.post<Contatto>(this.apiPostUrlModifica + '?id='+contatto.id, contatto, this.httpOptions).pipe(
      map(risposta => risposta),
      // catchError(this.handleError<Contatto>('updateContatto'))
    );
  }
  deleteContatto(idct:string): Observable<Contatto> {
    return this.http.get<Contatto>(this.apiPostUrlElimina + '?id='+idct).pipe(
      map(risposta => risposta),
      // catchError(this.handleError<Contatto>('updateContatto'))
    );
  }
}
