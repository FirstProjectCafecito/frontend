import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';

export class BaseService<T> {

  // Configuración básica de los encabezados para las solicitudes
  protected httOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  protected http: HttpClient = inject(HttpClient);

  // Ruta base para la API
  protected basePath: string = `${environment.serverBasePath}`;

  // Ruta de recursos específica
  protected resourceEndpoint: string = '/resources';

  // Manejo de errores en las solicitudes HTTP
  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // Método para obtener la ruta completa del recurso
  protected resourcePath() {
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  // Método para crear los encabezados de las solicitudes
  private createHttpOptions(): { headers: HttpHeaders } {
    return { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  }

  // Crear un nuevo recurso
  public create(item: any): Observable<T> {
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Eliminar un recurso
  public delete(id: any): Observable<any> {
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Actualizar un recurso
  public update(id: any, item: any): Observable<T> {
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Obtener todos los recursos
  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.resourcePath(), this.httOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Obtener un recurso por ID
  public getById(id: any): Observable<T> {
    return this.http.get<T>(`${this.resourcePath()}/${id}`, this.httOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
