import {Component, OnInit} from "angular2/core";
import {FormBuilder, ControlGroup, Validators, Control} from "angular2/common";

//import {PatientComponent} from "./patient.component";
import {Patient} from "./patient";
import {PatientService} from "./patient.service";
@Component({
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
        patient : Patient = null;
        myForm: ControlGroup;

    constructor(private _fb:FormBuilder, private _patientService: PatientService) {}

    onSubmit() {
        if (this.patient) {
            // Edit
            this.patient.patientId = this.myForm.value.patientId;
            this.patient.patientName = this.myForm.value.patientName;
            this.patient.patientCode = this.myForm.value.patientCode;
            this.patient.admissionDate = this.myForm.value.admissionDate;
            this.patient.imageUrl = this.myForm.value.imageUrl;
//            this._patientService.updatePatient(this.patient)
//                .subscribe(
//                    data => console.log(data),
//                    error => console.error(error)
//                );
            this.patient = null;
        } else {
            const patient:Patient = new Patient(this.myForm.value.patientId, this.myForm.value.patientName, this.myForm.value.patientCode, this.myForm.value.admissionDate, this.myForm.value.imageUrl);
            this._patientService.addPatient(patient)
                .subscribe(
                    data => {
                        console.log(data);
                        this._patientService.patients.push(data);
                    },
                    error => console.error(error)
                );
        }

    }

    onCancel() {
        this.patient = null;
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            patientId : ['', Validators.required],
            patientName: ['', Validators.required],
            patienCode: ['', Validators.required],
            admissionDate: ['', Validators.required],
            imageUrl: ['', Validators.required]
            });
        this._patientService.patientIsEdit.subscribe(
            patient => {
                this.patient = patient;
            }
        );
    }

}