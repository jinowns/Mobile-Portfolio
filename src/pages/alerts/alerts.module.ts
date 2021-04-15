import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertsPage } from './alerts';

@NgModule({
  declarations: [
    AlertsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertsPage),
  ],
})
export class AlertsPageModule {

  
}
import { AlertController } from 'ionic-angular';

export class MyPage {

  constructor(public alertCtrl: AlertController) { }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}