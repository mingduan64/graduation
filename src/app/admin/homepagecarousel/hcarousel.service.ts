import { Injectable } from '@angular/core'
import { Observable, throwError, from} from 'rxjs'
import { catchError, map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import {Hcarousel} from './hcarousel.model'
import 'rxjs/add/operator/map';

@Injectable({ providedIn: "root" })


export class HcarouselService {
  private hcas: Hcarousel[] = [];
  private HcasUpdated = new Subject<Hcarousel[]>();
 
  baseUri:string = 'http://localhost:8080/api/hcarousel';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
 // HcasUpdated: any;

  constructor(private http: HttpClient, private router: Router) { }
  createHca(hca): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, hca)
      .pipe(
        catchError(this.errorMgmt)
      )
  } 
 /* getHcalist() {
    console.log('lol');
    return this.http.get(`${this.baseUri}` );
    
  } */
 /* getHcalist() {
    this.http
      .get<{ message: string; hcas: any }>("http://localhost:8080/api/hcarousel")
      .pipe(
        map(hcaData => {
          return hcaData.hcas.map(hca => {
            return {
              title: hca.title,
              description: hca.description,
              id: hca._id,
              img: hca.img
            };
          });
        })
      )
      .subscribe(transformedHcas => {
        this.hcas = transformedHcas;
        this.HcasUpdated.next([...this.hcas]);
      });
  } */
  /*
  deleteHca(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  } */

  getHcalist() {
    
   
    this.http
      .get<{ message: string; hcas: any }>(`${this.baseUri}`)
      .pipe(
        map(hcaData => {
          return hcaData.hcas.map(hca => {
            return {
              title: hca.title,
              description: hca.description,
              id: hca._id,
              img: hca.img,
     //         Date: Date.now
            };
          });
        })
      )
      .subscribe(transformedHcas => {
        this.hcas = transformedHcas;
        this.HcasUpdated.next([...this.hcas]);
      });
  
   // return this.http.get(`${this.baseUri}`);
  }
  getHCabyid(id): Observable<any> {

    let url = `${this.baseUri}/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  } 
   /*createHCa(title: string, description: string, img: File) {
    const hcaData = new FormData();
    hcaData.append("title", title);
    hcaData.append("description", description);
    hcaData.append("img", img);
 //   hcaData.set("Date", title);
    this.http
      .post<{ message: string; hca: Hcarousel }>(
        "http://localhost:8080/api/hcarousel/create",
        hcaData
      )
      .subscribe(responseData => {
        const hca: Hcarousel = {
          id: responseData.hca.id,
          title: title,
          description: description,
          img: responseData.hca.img,
      //    Date:Date
        };
        this.hcas.push(hca);
        this.hcasUpdated.next([...this.hcas]);
        this.router.navigate(["/"]);

      });
    
     console.log(hcaData)
  }
 */
updateHCa(id, data): Observable<any> {
  let url = `${this.baseUri}/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}
 
  /*updateHCa(id: string, title: string, description: string, img: File| string  ){
    
      let hcaData: Hcarousel | FormData;
      if (typeof img === "object") {
        hcaData = new FormData();
        hcaData.append("id", id);
        hcaData.append("title", title);
        hcaData.append("description", description);
        hcaData.append("img", img);
   //     hcaData.set("Date", title)
      } else {
        hcaData = {
          id: id,
          title: title,
          description: description,
          img: img,
   //       Date: Date
        };
      }
      this.http
        .put("http://localhost:8080/api/hcarousel" + id, hcaData)
        .subscribe(response => {
          const updatedHcas = [...this.hcas];
          const oldHcaIndex = updatedHcas.findIndex(p => p.id === id);
          const hca: Hcarousel = {
            id: id,
            title: title,
            description: description,
      //      Date: Date,
            img: ""
          };
          updatedHcas[oldHcaIndex] = hca;
          this.hcas = updatedHcas;
          this.HcasUpdated.next([...this.hcas]);
          this.router.navigate(["/admin/managehomepage/carousel"]);
        });
    } */
    
  /*deleteHca(hcaId: string) {
    this.http
      .delete('http://localhost:8080/api/hcarousel' + hcaId)
      .subscribe(() => {
        const updatedHcas = this.hcas.filter(hca => hca.id !== hcaId);
        this.hcas = updatedHcas;
        this.HcasUpdated.next([...this.hcas]);
      });
  } */
  deleteHca(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  getHcaUpdateListener() {
    return this.HcasUpdated.asObservable();
  }
 
  }
  

 





  

 



