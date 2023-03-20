import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'directives';
  player = [
    { id: 1, name: "rohit sharma", runs: 60 },
    { id: 2, name: "virat Kohli", runs: 100 },
    { id: 3, name: "suryakumar Yadav", runs: 100 },
  ]


  constructor() {
    console.log()
  }
  totalRun = 0
  count = this.player
  ngOnInit(): void {
    for (let i = 0; i < this.player.length; i++) {
      this.totalRun += this.player[i].runs

    }

  }


}
