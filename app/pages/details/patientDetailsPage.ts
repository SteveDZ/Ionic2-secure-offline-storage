import {Page} from 'ionic-angular';
import {NavParams} from 'ionic-angular/index';
import {Patient} from '../sensitiveData/patient';

@Page({
    templateUrl: 'build/pages/details/patientDetailsPage.html'
})
export class PatientDetailsPage {
    public patient:Patient;
    
    constructor(public navParams: NavParams) {
        this.patient = navParams.get('selectedPatient');
    }
}