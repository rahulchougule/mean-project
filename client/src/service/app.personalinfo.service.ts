import { Injectable } from "@angular/core";
import { Http, HttpModule, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";

import { PersonalInfo } from "./../model/app.personalinfo.model";

@Injectable()
export class PersonalInfoService{
    url:String;
    constructor(private http:Http){
        this.url = "http://localhost:4040";
    }

    getPersonalInfo(token:string):Observable<Response>{
        let resp:Observable<Response>;

        let header:Headers= new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
        });

        let option: RequestOptions = new RequestOptions();
        option.headers = header;

        resp = this.http.get(`${this.url}/api/personalinfo`, option); 
        return resp;
    }


    getPersonalInfoTemp(token:string):Observable<Response>{
        let resp:Observable<Response>;

        let header:Headers= new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
        });

        let option: RequestOptions = new RequestOptions();
        option.headers = header;

        resp = this.http.get(`${this.url}/api/personalinfotemp`, option); 
        return resp;
    }

    getPersonalInfoByUserName(user:string, token:string):Observable<Response>{
              
        let resp:Observable<Response>;

        let header:Headers= new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
        });

        let option: RequestOptions = new RequestOptions();
        option.headers = header;

        resp = this.http.get(`${this.url}/api/personalinfo/byusername/`+user, option); 
        return resp;
    }

    getPersonalInfoByUserNameTemp(user:string, token:string):Observable<Response>{
      
        
        let resp:Observable<Response>;

        let header:Headers= new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
        });

        let option: RequestOptions = new RequestOptions();
        option.headers = header;

        resp = this.http.get(`${this.url}/api/personalinfo/byusernametemp/`+user, option); 
        return resp;
    }

    postData(userinfo:PersonalInfo, token:string):Observable<Response>{
        
        let resp:Observable<Response>;
        // 1. define request header
        let header:Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
    });

       let options: RequestOptions = new RequestOptions();
    
       options.headers = header;
    
       resp = this.http.post(`${this.url}/api/personalinfo`,JSON.stringify(userinfo), options);
    
       return resp;
    }

    postDataTemp(userinfo:PersonalInfo, token:string):Observable<Response>{
        
        let resp:Observable<Response>;
        // 1. define request header
        let header:Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
    });

       let options: RequestOptions = new RequestOptions();
    
       options.headers = header;
    
       resp = this.http.post(`${this.url}/api/personalinfotemp`,JSON.stringify(userinfo), options);
    
       return resp;
    }

    deleteTempData(user:string,token:string):Observable<Response>{

        console.log("in delete service", user);
        console.log("token in reject service ", token);
        
        let resp:Observable<Response>
        let header:Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer ' +token
        });


        let options : RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.delete(`${this.url}/api/personalinfotemp/`+user, options)
            console.log("resp", resp);
            
        return resp;
    }
}    