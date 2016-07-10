import {Patient} from "./patient";
import {Http, Headers} from "angular2/http";
import {Injectable, EventEmitter} from "angular2/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
@Injectable()
export class PatientService {
 //   patients: Patient[] = [];
  
    constructor (private _http: Http) {}

      patients : Patient [] = [
         {
             "patientId": "2",
             "patientName": "Patient Name 2 from Patient Service using git branch",
             "patientCode": "Patient Code 2",
             "admissionDate": "March 18, 2002",
             "description": "Patient no 2",
             "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
         },
         {
            "patientId": "5",
             "patientName": "Patient Name 5",
             "patientCode": "Patient Code 5",
             "admissionDate": "March 18, 2005",
             "description": "Patient no 5",  
             "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
         },
                  {
            "patientId": "7",
             "patientName": "Patient Name 7",
             "patientCode": "Patient Code 7",
             "admissionDate": "March 18, 2007",
             "description": "Patient no 7",  
             "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
         }
     ];
    patientIsEdit = new EventEmitter<Patient>();
  
    getPatientsLocalJson() {
        return this.patients;
    }   

    getPatients() {
        return this._http.get('http://localhost:3000/patient')
            .map(response => {
                const data = response.json();
                let objs: any[] = [];
                for (let i = 0; i < data.length; i++) {
                    let patient = 
                        new Patient (data[i].patientName, 
                                    data[i].patientId, 
                                    data[i].patientCode, 
                                    data[i].admissionDate, 
                                    data[i].description, 
                                    data[i].imageUrl);
                    objs.push(patient);
                }
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
            }

}