import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RepositoryService } from '../_services/repository.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-kafe',
  templateUrl: './kafe.component.html'
})
export class KafeComponent implements OnInit, AfterViewInit {

  constructor(private repo: RepositoryService) { }
  map: any;
  questions = 3;
  answers = 4;
  pos = 0;
  isLoading = true;
  allLocations: any;
  locations: any;
  current: any;
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.map = { mapID: 1, name: 'Kafe' };

    this.repo.getMap(1).subscribe(resp => {
      this.allLocations = resp.valueOf();
      this.allLocations.forEach(l => {
        l.possible = [];

        var answer = l.location[Math.floor(Math.random() * l.location.length)];
        // alway add the possible answers first
        l.possible.push(answer);
        l.response = "";
      });

      this.locations = new Array();

      while (this.locations.length < this.questions) {
        var l = this.allLocations[Math.floor(Math.random() * this.allLocations.length)];

        if (this.locations.filter(i => i.image === l.image).length === 0) {
          this.locations.push(l);
        }
      }

      this.locations.forEach(l => {
        while (l.possible.length < this.answers) {
          var possible = this.allLocations[Math.floor(Math.random() * this.allLocations.length)];
          var ans = possible.location[Math.floor(Math.random() * possible.location.length)];

          while (l.possible.filter(i => i.description === ans.description) > 0) {
            ans = possible.location[Math.floor(Math.random() * possible.location.length)];
          }
          l.possible.push(ans);
        }
      });

      this.current = this.locations[this.pos];
      this.isLoading = false;
    });

  }

  onAnswer(ans) {
    this.current.response = ans.description;

  }

  next() {
    if (this.pos < this.locations.length) {
      this.pos++;
    }

    this.current = this.locations[this.pos];
  }

  percentageRemaining() {
    var percent = Math.round((this.pos / this.locations.length) * 100);
    return percent + "%";
  }

  isCorrect(ans) {
    if (this.current.response === "") return false;

    var isTrue = false;
    this.current.location.forEach(l => {
      if (this.current.response === l.description) isTrue = true;
    });

    if (!isTrue && this.current.response == ans.description) {
      return true;
    } else {
      return false;
    }
    //current.response!=''&&current.response!==current.location&&p.description==current.location
  }

}
