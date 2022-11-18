import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = environment.urlService;
  private sbrPath: string = '/sbr';
  private apiKey: string = 'e687be22a01996bf0ff4cafb741f8af2';

  constructor(private http_: HttpClient) {}

  sendSurvey(data: any):Observable<[]> {
    data.fourth = 'si'
    return this.http_.post<[]>(`${this.apiUrl}${this.sbrPath}`, data, {
      headers: this.getHeaders(),
    });
  }

  private getHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'api-key': this.apiKey,
    });

    return headers;
  }
}
