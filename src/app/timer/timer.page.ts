import { Component, OnInit, NgModule } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateTimerComponent } from './../../modals/create/create-timer/create-timer.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})

@NgModule()
export class TimerPage implements OnInit {

  public checkWeather = false;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async createNewTimer() {
    const modal = await this.modalCtrl.create({
      component: CreateTimerComponent
    });
    return await modal.present();
  }

}
