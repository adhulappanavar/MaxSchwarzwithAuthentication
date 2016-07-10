import {Component, OnInit} from "angular2/core";
import {UsercommentComponent} from "./usercomment.component";
import {Usercomment} from "./usercomment";
import {UsercommentService} from "./usercomment.service";
@Component({
    selector: 'my-usercomment-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <my-usercomment *ngFor="#usercomment of usercomments" [usercomment]="usercomment" (editClicked)="usercomment.content = $event"></my-usercomment>     
        </section>
    `,
    directives: [UsercommentComponent]
})
export class UsercommentListComponent implements OnInit {

    constructor(private _usercommentService: UsercommentService) {}

    usercomments: Usercomment[];

    ngOnInit() {
        this._usercommentService.getUsercomments()
            .subscribe(
                usercomments => {
                    this.usercomments = usercomments;
                    this._usercommentService.usercomments = usercomments;
                },
                error => console.error(error)
            );
    }
}