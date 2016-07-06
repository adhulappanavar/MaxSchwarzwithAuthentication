import {Component, OnInit} from "angular2/core";
import {PatientComponent} from "./patient.component";
import {Patient} from "./patient";
import {PatientService} from "./patient.service";
@Component({
    selector: 'my-patient-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <my-patient *ngFor="#patient of patients" [patient]="patient" (editClicked)="patient.content = $event"></my-patient>     
        </section>
    `,
    directives: [PatientComponent]
})
export class PatientListComponent implements OnInit {

    constructor(private _patientService: PatientService) {}

    patients: Patient[];

    ngOnInit() {
        this._patientService.getPatients()
            .subscribe(
                patients => {
                    this.patients = patients;
                    this._patientService.patients = patients;
                },
                error => console.error(error)
            );
    }
}