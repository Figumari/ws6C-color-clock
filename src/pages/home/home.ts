import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IntervalObservable} from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  modeIcon = "color-palette";
  modeNumber = 0;

  hourColor : string;
  minutesColor : string;
  secondsColor : string;
  clockTime: string;

  private timerHours : number;
  private timerHoursVal : string;
  private timerMinutes : number;
  private timerMinutesVal : string;
  private timerSeconds : number;
  private timerSecondsVal : string;
  timeColor: any;



  constructor(public navCtrl: NavController) {
    this.myTimeoutFunction();
    IntervalObservable.create(1000).subscribe(timeColor => this.timeColor = this.setColor());
  };


  ngDoCheck(){
    this.myTimeoutFunction();
    //IntervalObservable.create(1000).subscribe(secondsColor => this.secondsColor = this.changeSecondsBackground());
  };



  myTimeoutFunction() {
    this.setColor();
    this.secondsColor = this.changeSecondsBackground();
    this.minutesColor = this.changeMinutesBackground();
    this.hourColor = this.changeHourBackground();
    this.displayTime();
  }

  setColor() {
    this.timerHours = new Date().getHours();
    this.timerMinutes = new Date().getMinutes();
    this.timerSeconds = new Date().getSeconds();

    if (this.timerSeconds < 10) {
      this.timerSecondsVal = '0' + this.timerSeconds.toString();
    } else {
      this.timerSecondsVal = this.timerSeconds.toString();
    }

    if (this.timerMinutes < 10) {
      this.timerMinutesVal = '0' + this.timerMinutes.toString();
    } else {
      this.timerMinutesVal = this.timerMinutes.toString();
    }

    if (this.timerHours < 10) {
      this.timerHoursVal = '0' + this.timerHours.toString();
    } else {
      this.timerHoursVal = this.timerHours.toString();
    }
  }



  changeHourBackground(): string {
    if (this.modeNumber == 0) {
      this.hourColor = '#' + this.timerSecondsVal +  this.timerHoursVal + this.timerMinutesVal;
      return this.hourColor;
    } else {
      this.hourColor = '#FFD3' + this.timerHoursVal;
      return this.hourColor;
    }
  }

  changeMinutesBackground(): string {
    if (this.modeNumber == 0) {
      this.minutesColor = '#' + this.timerMinutesVal +  this.timerMinutesVal + this.timerSecondsVal;
      return this.minutesColor;
    } else {
      this.hourColor = '#FFD3' + this.timerMinutesVal;
      return this.hourColor;
    }
  }

  changeSecondsBackground(): string {
    if (this.modeNumber == 0) {
      this.secondsColor = '#' + this.timerSecondsVal +  this.timerSecondsVal + this.timerSecondsVal;
      return this.secondsColor;
    } else {
      this.hourColor = '#FFD3' + this.timerSecondsVal;
      return this.hourColor;
    }

  }

  displayTime(): string {
    this.clockTime = this.timerHoursVal + ":" + this.timerMinutesVal + ":" + this.timerSecondsVal;
    return this.clockTime;
  }



  // changeMode() {
  //   if (this.modeIcon == "sunny") {
  //     this.modeIcon = "color-palette";
  //   } else {
  //     this.modeIcon = "sunny";
  //   }
  //   console.log('Hans')
  // }

  changeMode() {
    if (this.modeNumber == 0) {
      this.modeIcon = "sunny";
      this.modeNumber = 1;
      console.log(this.modeNumber);
    } else {
      this.modeIcon = "color-palette";
      this.modeNumber = 0;
      console.log(this.modeNumber);
    }
  }


}
