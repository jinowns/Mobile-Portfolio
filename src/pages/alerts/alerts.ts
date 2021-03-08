import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';

/**
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component(
{
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage 
{
  user:string = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl:AlertController) 
  {

  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad AlertsPage');
  }
  mostrarAlert() 
  {
    let prompt = this.alertCtrl.create
    ({
        title: 'Prompt',
        message: "Digite seu nome",
        inputs: 
        [
        {
          name: 'nome',
          placeholder: 'Nome'
        },
        ],
        buttons: 
        [
        {
          text: 'Cancelar',
          handler: data => 
          {
            console.log('Clicou no Cancelar');
          }
        },
        {
          text: 'Entrar',
          handler: data => 
          {
            this.user = 'Bem vindo ' + data.nome + '!';
            console.log('Clicou no Entrar');
          }  
        }
        ]
    });
  }
}
