import { Injectable } from "@angular/core";
import { Http, HttpModule, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";



@Injectable()
export class DashboardService {
    url:String;
    constructor(private http:Http){
        this.url = "http://localhost:4040";
    }

    dashboardData(token:string):Observable<Response>{

        let resp:Observable<Response>;

        let header:Headers= new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
        });

        let option: RequestOptions = new RequestOptions();
        option.headers = header;
        
        resp = this.http.get(`${this.url}/api/dashboard`, option);

       return resp;

    }

    dashboardDataPending(token:string):Observable<Response>{

        let resp:Observable<Response>;

        let header:Headers= new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
        });

        let option: RequestOptions = new RequestOptions();
        option.headers = header;
        
        resp = this.http.get(`${this.url}/api/pending`, option);

       return resp;

    }

    AccessUserCount(token:string):Observable<Response>{

        let resp:Observable<Response>;

        let header:Headers= new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
        });

        let option: RequestOptions = new RequestOptions();
        option.headers = header;
        
        resp = this.http.get(`${this.url}/api/users`, option);

       return resp;

    }
    
    OperatorCount(token:string):Observable<Response>{

        let resp:Observable<Response>;

        let header:Headers= new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
        });

        let option: RequestOptions = new RequestOptions();
        option.headers = header;
        
        resp = this.http.get(`${this.url}/api/operators `, option);

       return resp;

    }

   
}