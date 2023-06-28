import {
  Component,
  OnInit
} from "@angular/core";
import {
  FormBuilder,
  FormGroup
} from "@angular/forms";

export interface TimeInfo {
  label: string;
  value: number;
  type: string;
}

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  public hour: number = 0;
  public minute: number = 0;
  public second: number = 0;

  public hourInterval!: number;
  public minuteInterval!: number;
  public secondInterval!: number;

  constructor(
    private fb: FormBuilder
  ) {
  }

  public ngOnInit() {
    console.log(Object.values(this.countdownTimes))
    for (let countdownTime of this.countdownTimes) {
      console.log('countdownTime', countdownTime)
      this.countdownForm.addControl(countdownTime.label, this.fb.control(countdownTime.value))
    }
    console.log(this.countdownForm)
  }

  public countdownTimes: TimeInfo[] = [
    {
      label: 'HH',
      value: 0,
      type: 'number'
    },
    {
      label: 'MM',
      value: 1,
      type: 'number'
    },
    {
      label: 'SS',
      value: 3,
      type: 'number'
    }
  ]


  public countdownForm: FormGroup = this.fb.group({});


  public onStart() {
    console.log('SUBMIT clicked!')
    console.log(this.countdownForm.get('HH'))
    console.log(this.countdownForm.get('MM'))
    console.log(this.countdownForm.get('SS'))

    this.hour = this.getHH()?.value
    this.minute = this.getMM()?.value
    this.second = this.getSS()?.value

    this.secondInterval = setInterval(() => {
      if (this.second === 0) {
        if (this.minute > 0 || this.hour > 0) {
          this.minute--;
          this.second = 59
        } else {
          this.second = 0;
        }
      } else {
        this.second--;
      }

      if (this.hour <= 0 && this.minute <= 0 && this.second <= 0) {
        console.log('interval cleared!')
        clearInterval(this.secondInterval)
        clearInterval(this.minuteInterval)
        clearInterval(this.hourInterval)
      }
    }, 1000)
    this.minuteInterval = setInterval(() => {
      if (this.minute === 0) {
        if (this.hour > 0) {
          this.hour--;
          this.minute = 59;
        } else {
          this.minute = 0;
        }
      }
    }, 60000)
    this.hourInterval = setInterval(() => {
      if (this.hour === 0) {
        this.hour = 0
      } else {
        this.hour--
      }
    }, 3600000)
  }

  public onPause() {
    console.log('PAUSE clicked!')
    clearInterval(this.secondInterval)
    clearInterval(this.minuteInterval)
    clearInterval(this.hourInterval)
    this.getHH()?.setValue(this.hour)
    this.getMM()?.setValue(this.minute)
    this.getSS()?.setValue(this.second)
  }

  public onReset() {
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.getHH()?.setValue(0)
    this.getMM()?.setValue(0)
    this.getSS()?.setValue(0)
    clearInterval(this.secondInterval)
    clearInterval(this.minuteInterval)
    clearInterval(this.hourInterval)
  }


  public getHH() {
    return this.countdownForm.get('HH')
  }

  public getMM() {
    return this.countdownForm.get('MM')
  }

  public getSS() {
    return this.countdownForm.get('SS')
  }
}
