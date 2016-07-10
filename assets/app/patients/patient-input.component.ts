import {Component, OnInit} from "angular2/core";

//import {PatientComponent} from "./patient.component";
//import {Message} from "./patient";
//import {MessageService} from "./patient.service";
@Component({
//    moduleId: module.id,
    selector: 'my-patient-input',
    templateUrl: 'html/patients/patient-input.component.html'

//    template: `
//         <div><h3>{{pageTitle}}</h3></div>
//    `
//    ,
//    directives: [PatientComponent]
})
export class PatientInputComponent{
        pageTitle: string = 'Patient Input Component url';

//    constructor(private _patientService: PatientService) {}

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
 //  }
}