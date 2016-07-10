import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Patient} from "./patient";
//import {MessageService} from "./message.service";
@Component({
    selector: 'my-patient',
    template: `
                <td>{{ patient.patientName }}</td>
                <td>{{ patient.patientCode }}</td>
                <td>{{ patient.admissionDate }}</td>
                <td>
                    <div class="config" *ngIf="belongsToUser()">
                        <a (click)="onEdit()">Edit</a>
                        <a (click)="onDelete()">Delete</a>
                    </div>
                </td>
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
//    @Output() editClicked = new EventEmitter<string>();

//    constructor (private _messageService: MessageService) {}

    onEdit() {
//        this._messageService.editMessage(this.message);
    }

    onDelete() {
//        this._messageService.deleteMessage(this.message)
//            .subscribe(
//                data => console.log(data),
//                error => console.error(error)
//            );
    }

    belongsToUser() {
        return true;
 //       return localStorage.getItem('userId') == this.message.userId;
    }
}