import {Component, OnInit} from "angular2/core";
import {PatientComponent} from "./patient.component";
//import {Patient} from "./patient";
import {PatientService} from "./patient.service";
@Component({
    selector: 'my-patient-list',
    templateUrl: 'html/patients/patient-list.component.html',
        styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `],
// directives: [PatientComponent]
})
export class PatientListComponent {
    pageTitle: string = 'Patients List Component - 4';

     patients : any [] = [
         {
             "patientId": "2",
             "patientName": "Patient Name 2",
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

    constructor(private _patientService: PatientService) {}
    ngOnInit() {
        this.patients = this._patientService.getPatients();
    }


//    patients: Patient[];
//
//    ngOnInit() {
//        this._patientService.getMessages()
//            .subscribe(
 //               patients => {
 //                   this.patients = messages;
 //                   this._PatientService.patients = patients;
 //               },
 //               error => console.error(error)
 //           );
 //   }

//    belongsToUser() {
//        return localStorage.getItem('userId') == this.usercomment.userId;
//    }

    belongsToUser() {
        return true;
    }

       onEdit(event : string, patient : any[]) {
           console.log(event, patient);

//        this._messageService.editMessage(this.message);
    }

}