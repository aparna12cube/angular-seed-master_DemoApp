import {Component, OnInit} from '@angular/core'
import {PatientService} from './patient.service'
import { Observable } from 'rxjs/Observable';



@Component({
moduleId: module.id,
selector:'sd-patient',
templateUrl: 'patient.component.html',
styleUrls:['patient.component.css'],
providers:[PatientService]
})
export class PatientComponent implements OnInit{
//***************
 
   
    patientDetails: any[] = [];

    ngOnInit(){
        this.getPatientData();
    }
    constructor(private _patientService: PatientService){
       
    }

    getPatientData(){
        var context=this;
       this._patientService.getPatientData()
                            .subscribe(
                                pt=> this.patientDetails= pt);

    }

    getStatusKeyImage(statusKey: any): any{
        switch(statusKey){
            case 'Action Needed': 
                                    return 'glyphicon glyphicon-circle-arrow-up';
            default:                return "ffff";        

        }
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