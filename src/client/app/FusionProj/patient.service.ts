import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientService{
    

    constructor(private _http: Http) {

    }
    getPatientData(){
        var context=this;
       return this._http.get("http://www.mocky.io/v2/58ea771b1100009c02288220")
                .map(res=>res.json());
                // .map(res=>res.forEach(function(pt: any){
                //         pt.service=context.getImageUrl(pt.service);
                //     })
                // );
                // http://www.mocky.io/v2/58e95d042a0000bf062dbbcd
                // http://www.mocky.io/v2/58ea73a0110000250228821f
    }
    
    getImageUrl(serviceType:any){
        switch(serviceType){
            case 'CoPay': return '../../../../Images/Copay.jpeg';
            case 'BV': return '../../../../Images/BenefotVerification.jpg';
            case 'PA': return '../../../../Images/PriorAuthorization.jpg';
            default:                return "ffff";        

        }

    }

    
   
}