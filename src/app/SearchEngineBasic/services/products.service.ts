import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Products} from '../models/products.entity';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<Products> {

  private products: Products[]=[];

  private _products: BehaviorSubject<Products[]> = new BehaviorSubject<Products[]>([]);

  private _pageableData : BehaviorSubject<any> = new BehaviorSubject<any>([]);



  private page: number = 0;
  private PAGE_SIZE: number=0;

  constructor() {
    super();
    this.resourceEndpoint = '/products';
  }

  get getProducts(){
    return this._products.asObservable();
  }
  get getPageableData(){
    return this._pageableData.asObservable();
  }

  updateData(){
    this.getPaginationData();
  }
  getPaginationData(){
    this.findAllPaginationData(this.page).subscribe({
      next: response => {
        this.products = response.content;
        //console.log(this.products)
        this._products.next(this.products);

        const paginationData = {
          currentPage: response.number,
          totalElements: response.totalElements,
          totalPages: response.totalPages,
          pageSize: response.size,
        }
        //console.log(paginationData);
        this.PAGE_SIZE=paginationData.pageSize;
        this._pageableData.next(paginationData);
      },
      error:err =>{
        console.error("Error al obtener datos",err);
      }
    })
  }
  nextPage(){
    if(this.products.length<this.PAGE_SIZE) {
      console.warn("There are not more pages")
      return;
    }
    this.page = this.page + 1;
    this.getPaginationData();

  }
  beforePage(){
    if(this.page===0 ){
      console.warn("You are in the first page")
      return;
    }
    this.page=this.page - 1;
    this.getPaginationData();


  }

  findProductsSearched(text: string): Observable<any> {
    return this.http.get<any>(`${this.basePath}${this.resourceEndpoint}/search/${text}`);
  }
  //Metodo para obtener todos los datos del pageable
  findAllPaginationData(page:number): Observable<any>{
    return this.http.get<any>(`${this.basePath}${this.resourceEndpoint}/page/${page}`)
  }



}
