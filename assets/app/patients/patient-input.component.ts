import {Component, OnInit} from "angular2/core";
import {Patient} from "./patient";
import {PatientService} from "./patient.service";
@Component({
    selector: 'my-patient-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
                <div class="form-group">
                    <label for="content">Content</label>
                    <input ngControl="content" type="text" class="form-control" id="content" #input [value]="patient?.content">
                </div>
                <button type="submit" class="btn btn-primary">{{ !patient ? 'Add Patient' : 'Edit Patient' }}</button>
                <button type="button" class="btn btn-danger" (click)="onCancel()" *ngIf="patient">Cancel</button>
            </form>
        </section>
    `
})
export class PatientInputComponent implements OnInit {
    patient: Patient = null;

    constructor(private _patientService: PatientService) {}

    onSubmit(form:any) {
        if (this.patient) {
            // Edit
            this.patient.content = form.content;
            this._patientService.updatePatient(this.patient)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
            this.patient = null;
        } else {
            const patient:Patient = new Patient(form.content, null, 'Dummy');
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
        this._patientService.patientIsEdit.subscribe(
            patient => {
                this.patient = patient;
            }
        );
    }
}