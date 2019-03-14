import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "../environments/environment";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiServiceService {
  constructor(protected httpClient: HttpClient) {}

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
  }

  private getUrl(url) {
    return environment.apiUrl + url;
  }

  getRequest<T>(url: string): Observable<T[]> {
    return this.httpClient
      .get<T[]>(this.getUrl(url), this.getHttpOptions())
      .pipe(
        tap(data => {
          return data;
        }),
        catchError(this.handleError<T[]>(url, []))
      );
  }

  getRequestById<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.getUrl(url), this.getHttpOptions()).pipe(
      tap(data => {
        return data;
      }),
      catchError(this.handleError<T>(url, {}))
    );
  }

  putRequest<T>(url: string, putData: object): Observable<T> {
    return this.httpClient
      .put<T>(this.getUrl(url), putData, this.getHttpOptions())
      .pipe(
        tap(data => data),
        catchError(this.handleError<T>(url, {}))
      );
  }

  deleteRequest<T>(url: string): Observable<T> {
    return this.httpClient
      .delete<T>(this.getUrl(url), this.getHttpOptions())
      .pipe(
        tap(data => data),
        catchError(this.handleError<T>(url, {}))
      );
  }

  postRequest<T>(url: string, requestData: object): Observable<T> {
    return this.httpClient
      .post<T>(this.getUrl(url), requestData, this.getHttpOptions())
      .pipe(
        tap(data => data),
        catchError(this.handleError<T>(url, {}))
      );
  }

  handleError<T>(operation = "operation", result) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      throw error;
    };
  }
}
