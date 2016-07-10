import {Component} from "angular2/core";
import {UsercommentInputComponent} from "./usercomment-input.component";
import {UsercommentListComponent} from "./usercomment-list.component";
@Component({
    selector: 'my-usercomments',
    template: `
        <div class="row spacing">
            <my-usercomment-input></my-usercomment-input>
        </div>
        <div class="row spacing">
            <my-usercomment-list></my-usercomment-list>
        </div> 
    `,
    directives: [UsercommentListComponent, UsercommentInputComponent]
})
export class UsercommentsComponent {
    
}