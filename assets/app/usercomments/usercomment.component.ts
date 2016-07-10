import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Usercomment} from "./usercomment";
import {UsercommentService} from "./usercomment.service";
@Component({
    selector: 'my-usercomment',
    template: `
        <article class="panel panel-default">
            <div class="panel-body">
                {{ usercomment.content }}
            </div>
            <footer class="panel-footer">
                <div class="author">
                    {{ usercomment.username }}
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
export class UsercommentComponent {
    @Input() usercomment:Usercomment;
    @Output() editClicked = new EventEmitter<string>();

    constructor (private _usercommentService: UsercommentService) {}

    onEdit() {
        this._usercommentService.editUsercomment(this.usercomment);
    }

    onDelete() {
        this._usercommentService.deleteUsercomment(this.usercomment)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.usercomment.userId;
    }
}