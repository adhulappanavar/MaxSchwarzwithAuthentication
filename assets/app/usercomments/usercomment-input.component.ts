import {Component, OnInit} from "angular2/core";
import {Usercomment} from "./usercomment";
import {UsercommentService} from "./usercomment.service";
@Component({
    selector: 'my-usercomment-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
                <div class="form-group">
                    <label for="content">Content</label>
                    <input ngControl="content" type="text" class="form-control" id="content" #input [value]="usercomment?.content">
                </div>
                <button type="submit" class="btn btn-primary">{{ !usercomment ? 'Add Usercomment' : 'Edit Usercomment' }}</button>
                <button type="button" class="btn btn-danger" (click)="onCancel()" *ngIf="usercomment">Cancel</button>
            </form>
        </section>
    `
})
export class UsercommentInputComponent implements OnInit {
    usercomment: Usercomment = null;

    constructor(private _usercommentService: UsercommentService) {}

    onSubmit(form:any) {
        if (this.usercomment) {
            // Edit
            this.usercomment.content = form.content;
            this._usercommentService.updateUsercomment(this.usercomment)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
            this.usercomment = null;
        } else {
            const usercomment:Usercomment = new Usercomment(form.content, null, 'Dummy');
            this._usercommentService.addUsercomment(usercomment)
                .subscribe(
                    data => {
                        console.log(data);
                        this._usercommentService.usercomments.push(data);
                    },
                    error => console.error(error)
                );
        }
    }

    onCancel() {
        this.usercomment = null;
    }

    ngOnInit() {
        this._usercommentService.usercommentIsEdit.subscribe(
            usercomment => {
                this.usercomment = usercomment;
            }
        );
    }
}