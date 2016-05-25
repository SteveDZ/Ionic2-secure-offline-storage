import {Page} from 'ionic-angular'; 
import {Patient} from './patient';
import {NavController} from "ionic-angular/index";
import {PatientDetailsPage} from '../details/patientDetailsPage';

@Page({
    templateUrl: 'build/pages/sensitiveData/sensitiveDataPage.html'
})
export class SensitiveDataPage {
    public patients:Patient[];
    
    constructor(public nav: NavController) {
        this.patients = [
            new Patient('Steve', 'De Zitter', '123456-789-00', ['Windpokken', 'Mazelen', 'RSV']),
            new Patient('Iemand', 'Anders', '987654-321-00', ['Windpokken','Meningitis']),
            new Patient('Roger', 'Vandenbrande', '653765-987-00', ['Windpokken', 'Bof'])
        ];
    }
    
    openDetail(patient:Patient) {
        this.nav.push(PatientDetailsPage, {selectedPatient: patient});
    }
}