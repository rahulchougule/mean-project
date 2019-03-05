import { Injectable } from "@angular/core";
import { Http, HttpModule, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Login } from "./../model/app.login.model";


@Injectable()
export class AuthenticationService {
    url:String;
    constructor(private http:Http){
        this.url = "http://localhost:4040";
    }

    // getData():Observable<Response>{
    //     let resp:Observable<Response>;
    //     resp = this.http.get(`${this.url}/api/products`); 
    //     return resp;
    // }

    postData(usr:Login):Observable<Response>{
        let resp:Observable<Response>;
        // 1. define request header
        let header:Headers = new Headers({"Content-Type":"application/json"});
       // header.append("AUTHORIZATION", "Basic UserName:Password");
        
       // 2. define request option for header
        // collecton of the header values
       let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}/api/users/create`,JSON.stringify(usr), options);
       return resp;
    }


    loginData(usr:Login):Observable<Response>{

        console.log("login data .....");
        console.log(usr);
        
        let resp:Observable<Response>;
        // 1. define request header
        let header:Headers = new Headers({"Content-Type":"application/json"});
       // header.append("AUTHORIZATION", "Basic UserName:Password");
        
       // 2. define request option for header
        // collecton of the header values
        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        
        
        resp = this.http.post(`${this.url}/api/login`,JSON.stringify(usr), options);

        console.log("resp --- : ", resp);
    

       return resp;
    }
    
    // putData(id:string, prd:Product):Observable<Response>{
    //     let resp:Observable<Response>;
    //     // 1. define request header
    //     let header:Headers = new Headers({"Content-Type":"application/json"});
    //    // header.append("AUTHORIZATION", "Basic UserName:Password");
        
    //    // 2. define request option for header
    //     // collecton of the header values
    //    let options: RequestOptions = new RequestOptions();
    //     options.headers = header;        
    //     resp = this.http.put(`${this.url}/api/products/${id}`,JSON.stringify(prd), options);
    //     return resp;


    // }
    // deleteData(id:string):Observable<Response>{
    //     let resp:Observable<Response>;
    //     resp = this.http.delete(`${this.url}/api/products/${id}`);
    //     return resp;
    // }

    // searchData(val:string):Observable<Response>{
    //     let resp:Observable<Response>
    //     resp = this.http.get(`${this.url}/api/products/${val}`);
    //     return resp;
    // }
}