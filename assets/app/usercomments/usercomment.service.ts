import {Usercomment} from "./usercomment";
import {Http, Headers} from "angular2/http";
import {Injectable, EventEmitter} from "angular2/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
@Injectable()
export class UsercommentService {
    usercomments: Usercomment[] = [];
    usercommentIsEdit = new EventEmitter<Usercomment>();
    
    constructor (private _http: Http) {}

    addUsercomment(usercomment: Usercomment) {
        const body = JSON.stringify(usercomment);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/usercomment' + token, body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let usercomment = new Usercomment(data.content, data._id, data.user.firstName, data.user._id);
                return usercomment;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getUsercomments() {
        return this._http.get('http://localhost:3000/usercomment')
            .map(response => {
                const data = response.json().obj;
                let objs: any[] = [];
                for (let i = 0; i < data.length; i++) {
                    let usercomment = new Usercomment(data[i].content, data[i]._id, data[i].user.firstName, data[i].user._id);
                    objs.push(usercomment);
                };
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
    }

    updateUsercomment(usercomment: Usercomment) {
        const body = JSON.stringify(usercomment);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.patch('http://localhost:3000/usercomment/' + usercomment.usercommentId + token, body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    editUsercomment(usercomment: Usercomment) {
        this.usercommentIsEdit.emit(usercomment);
    }

    deleteUsercomment(usercomment: Usercomment) {
        this.usercomments.splice(this.usercomments.indexOf(usercomment), 1);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.delete('http://localhost:3000/usercomment/' + usercomment.usercommentId + token)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}