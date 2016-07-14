import {Component, OnInit, Output, EventEmitter} from "angular2/core";
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
    `]
//    directives: [PatientComponent]
})
export class PatientListComponent {
    pageTitle: string = 'Patients List Component - 4';
    @Output() editClicked = new EventEmitter<Patient>();

        constructor(private _patientService: PatientService) {}

     patients : Patient [] = [];

    ngOnInit() {
        this.patients = this._patientService.getPatientsLocalJson();
    }

//    ngOnInit() {
//       this._patientService.getPatients()
//            .subscribe(
//                patients => {
//                    this.patients = patients;
//                    this._patientService.patients = patients;
//                },
//                error => console.error(error)
//            );
//    }


//    belongsToUser() {
//        return localStorage.getItem('userId') == this.usercomment.userId;
//    }

    belongsToUser() {
        return true;
    }

       onEdit(event : string, patient : Patient) {
           console.log(event, patient);

        this._patientService.editPatient(patient);
    }

}