import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
@Component({
    selector: 'my-header',
    template: `

    <!--div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Messages']">Messages</a></li>
                    <li><a [routerLink]="['Patients']">Patients</a></li>
                    <li><a [routerLink]="['Usercomments']">Usercomments</a></li>
                    <li><a [routerLink]="['Auth']">Authentication</a></li>
                </ul>
            </div>
        </nav>
     </div-->

        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li><a [routerLink]="['Messages']">Messages</a></li>
                    <li><a [routerLink]="['Patients']">Patients</a></li>
                    <li><a [routerLink]="['Persons']">StarWars-Persons</a></li>
                    <li><a [routerLink]="['Usercomments']">Usercomments</a></li>
                    <li><a [routerLink]="['Auth']">Authentication</a></li>
                </ul>
            </nav>
        </header>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        header {
            margin-bottom: 20px;
        }
    
        ul {
          text-align: center;  
        }
        
        li {
            float: none;
            display: inline-block;
        }
        
        .router-link-active {
            background-color: #337ab7;
            color: white;
        }
    `]
})
export class HeaderComponent {
    
}