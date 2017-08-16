import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  account: string;
  password: string;

  constructor() {
    this.test(null);
  }

  test(a: {[name: string]: number; [age: number]: number}) {

    let c: {[name: string]: number; [age: number]: number};

    c = {qq: 2, ff: 3, ss: 5, tt: 9, 'f' : 2, 2: 4};
    c.name = 2;
    c.age = 4;
    c.xxx = 100;
  }

  ngOnInit() {
  }

}
