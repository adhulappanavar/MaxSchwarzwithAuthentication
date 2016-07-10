///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {MessageService} from "./messages/message.service";
import {PatientService} from "./patients/patient.service";
import {UsercommentService} from "./usercomments/usercomment.service";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";
import {provide} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {AuthService} from "./auth/auth.service";

bootstrap(AppComponent, [MessageService, AuthService, UsercommentService, PatientService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), HTTP_PROVIDERS]);