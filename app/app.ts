import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {SensitiveDataPage} from './pages/sensitiveData/sensitiveDataPage';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = SensitiveDataPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      
      
      /*
      All our plugins are loaded, so this will be the place where we create our database!
      For Dev purposes, we'll be filling the db with static content, but just imagine this comes from a backend somewhere.
      */
      
    });
  }
}
