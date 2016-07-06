import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Patient} from "./patient";
import {PatientService} from "./patient.service";
@Component({
    selector: 'my-patient',
    template: `
        <article class="panel panel-default">
            <div class="panel-body">
                {{ patient.content }}
            </div>
            <footer class="panel-footer">
                <div class="author">
                    {{ patient.username }}
                </div>
                <div class="config" *ngIf="belongsToUser()">
                    <a (click)="onEdit()">Edit</a>
                    <a (click)="onDelete()">Delete</a>
                </div>
            </footer>
        </article>
    `,
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
})
export class PatientComponent {
    @Input() patient:Patient;
    @Output() editClicked = new EventEmitter<string>();

    constructor (private _patientService: PatientService) {}

    onEdit() {
        this._patientService.editPatient(this.patient);
    }

    onDelete() {
        this._patientService.deletePatient(this.patient)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.patient.userId;
    }
}