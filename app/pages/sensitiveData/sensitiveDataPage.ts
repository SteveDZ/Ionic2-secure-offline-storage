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
            new Patient('Captain', 'America', '123456-789-00', ['Chickenpox', 'Measles']),
            new Patient('Iron', 'Man', '987654-321-00', ['Chickenpox','Meningitis']),
            new Patient('Tho', 'rrrr', '653765-987-00', ['Chickenpox', 'Bronchiolitis'])
        ];
    }
    
    openDetail(patient:Patient) {
        this.nav.push(PatientDetailsPage, {selectedPatient: patient});
    }
}