import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  baseUrl = environment.baseUrl;
  CursoSubject = new Subject();

  constructor(private http: HttpClient) {}

  //jkhasdgdajhdsasajh
  listarclientes(): Observable<any> {
    return this.http.get<any>(this.baseUrl + `cliente`);
  }
  guardarCliente(body: any): Observable<any> {
    return this.http.post(this.baseUrl + 'cliente', body);
  }
  updateCliente(body: any, idcliente: number): Observable<any> {
    return this.http.put(
      this.baseUrl + `cliente?id=${idcliente}`,
      body
    );
  }
  getCliente(idcliente: number): Observable<any> {
    return this.http.get<any>(
      this.baseUrl +
        `cliente?id=${idcliente} `
    );
  }
}
