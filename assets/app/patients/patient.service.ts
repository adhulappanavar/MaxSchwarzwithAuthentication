import {Patient} from "./patient";
import {Http, Headers} from "angular2/http";
import {Injectable, EventEmitter} from "angular2/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
@Injectable()
export class PatientService {
      patients : Patient [] = [
         {
             "patientId": "2",
             "patientName": "Patient Name 2 from Patient Service",
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
    
    getPatients() {
        return this.patients;
    }   

//    getMessages() {
//        return this._http.get('http://localhost:3000/message')
//            .map(response => {
//                const data = response.json().obj;
//                let objs: any[] = [];
//                for (let i = 0; i < data.length; i++) {
//                    let message = new Message(data[i].content, data[i]._id, 'Dummy', data[i].user._id);
//                    objs.push(message);
//                }
//                return objs;
//            })
//            .catch(error => Observable.throw(error.json()));
//    }

}