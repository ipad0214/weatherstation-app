import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-timer',
  templateUrl: './create-timer.component.html',
  styleUrls: ['./create-timer.component.scss'],
})
export class CreateTimerComponent implements OnInit {
  public checkWeather = false;
  private days: object = {
    monday: false,
    tuesday: false,
    wensday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  };
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  cancel() {
    this.modalCtrl.dismiss();
  }

  save() {
    this.modalCtrl.dismiss();
  }
}
