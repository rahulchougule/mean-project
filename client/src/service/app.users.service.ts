import { Injectable } from "@angular/core";
import { Http, HttpModule, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";

import { User } from "./../model/app.user.model";

@Injectable()
export class UserService{
    url:String;
    constructor(private http:Http){
        this.url = "http://localhost:4040";
    }

    getUsers(token:string):Observable<Response>{
        let resp:Observable<Response>;

        let header:Headers= new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
        });

        let option: RequestOptions = new RequestOptions();
        option.headers = header;

        resp = this.http.get(`${this.url}/api/user`, option); 
        return resp;
    }

    postData(user:User, token:string):Observable<Response>{
        let resp:Observable<Response>;
        // 1. define request header
        let header:Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
    });

       let options: RequestOptions = new RequestOptions();
    
       options.headers = header;
    
       resp = this.http.post(`${this.url}/api/user`,JSON.stringify(user), options);
    
       return resp;
    }


    
    searchData(val:string, token:string):Observable<Response>{
        let resp:Observable<Response>

        let header:Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
    });

       let options: RequestOptions = new RequestOptions();
    
        options.headers = header;

        resp = this.http.get(`${this.url}/api/user/`+val, options);
        return resp;
    }
}    