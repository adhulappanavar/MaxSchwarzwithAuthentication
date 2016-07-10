import {Component, OnInit} from "angular2/core";
import {PatientComponent} from "./patient.component";
import {Patient} from "./patient";
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

     patients : Patient [] = [];
  
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