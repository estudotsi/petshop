import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Product } from '../models/product.model';
//import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public url = 'http://localhost:3000/v1';

    constructor(private http: HttpClient) { }

    getProducts(){
        return this.http.get<Product[]>(`${this.url}/products`);
    }

    authenticate(data: any) {
        return this.http.post(`${this.url}/accounts/authenticate`, data);
    }

}

   /* public composeHeaders() {
        const token = localStorage.getItem('petshop.token');
        const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
        return headers;
    }



    

    refreshToken() {
        return this.http.post(
            `${this.url}/accounts/refresh-token`,
            null,
            { headers: this.composeHeaders() }
        );
    }

    create(data) {
        return this.http.post(`${this.url}/accounts`, data);
    }

    resetPassword(data) {
        return this.http.post(`${this.url}/accounts/reset-password`, data);
    }

    getProfile() {
        return this.http.get(`${this.url}/accounts`, { headers: this.composeHeaders() });
    }

    updateProfile(data) {
        return this.http.put(`${this.url}/accounts`, data, { headers: this.composeHeaders() });
    }*/
