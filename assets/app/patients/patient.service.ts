import {Patient} from "./patient";
import {Http, Headers} from "angular2/http";
import {Injectable, EventEmitter} from "angular2/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
@Injectable()
export class PatientService {
    patients: Patient[] = [];
    patientIsEdit = new EventEmitter<Patient>();
    
    constructor (private _http: Http) {}

    addPatient(patient: Patient) {
        const body = JSON.stringify(patient);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/patient' + token, body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let patient = new Patient(data.content, data._id, data.user.firstName, data.user._id);
                return patient;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getPatients() {
        return this._http.get('http://localhost:3000/patient')
            .map(response => {
                const data = response.json().obj;
                let objs: any[] = [];
                for (let i = 0; i < data.length; i++) {
                    let patient = new Patient(data[i].content, data[i]._id, data[i].user.firstName, data[i].user._id);
                    objs.push(patient);
                };
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
    }

    updatePatient(patient: Patient) {
        const body = JSON.stringify(patient);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.patch('http://localhost:3000/patient/' + patient.patientId + token, body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    editPatient(patient: Patient) {
        this.patientIsEdit.emit(patient);
    }

    deletePatient(patient: Patient) {
        this.patients.splice(this.patients.indexOf(patient), 1);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.delete('http://localhost:3000/patient/' + patient.patientId + token)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}