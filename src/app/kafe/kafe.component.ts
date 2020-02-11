import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RepositoryService } from '../_services/repository.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-kafe',
  templateUrl: './kafe.component.html'
})
export class KafeComponent implements OnInit, AfterViewInit {

  constructor(private repo: RepositoryService) { }

  qType= 2; // 1 - show the correct answer.  2 - continue, even if wrong answer
  state = 1;  // 1 - Q&A.  2 - See results
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
         
          while (l.possible.filter(i => i.description === ans.description).length > 0) {
            possible = this.allLocations[Math.floor(Math.random() * this.allLocations.length)];
            ans = possible.location[Math.floor(Math.random() * possible.location.length)];
          }
          
          l.possible.push(ans);
        }
      });


      // At this point, the first answer is the correct one.
      // So we need to jumble up the answers
      this.locations.forEach(l => {
        l.possible = this.shuffle(l.possible);
      });
      
      this.current = this.locations[this.pos];
      this.isLoading = false;
    });

  }

    // https://stackoverflow.com/a/2450976
    shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }

    
  onAnswer(ans) {
    this.current.response = ans.description;
    
    var correctAnswerSelected = false;
    this.current.location.forEach(l => {
      if (this.current.response === l.description) correctAnswerSelected = true;
    });

    if (this.qType == 2 || correctAnswerSelected) { this.next()};
  }

  correctAnswers(){
    var correct = 0;

    this.locations.forEach(locs => {
      locs.location.forEach(l => {
        if (locs.response === l.description) correct ++;
      });
    });

    return correct;
  }
  
  next() {
    if (this.pos < this.locations.length - 1) {
      this.pos++;
      this.current = this.locations[this.pos];
    }else{
      this.state = 2;
    }

  }

  prev() {
    if (this.pos > 0) {
      this.pos--;
      this.current = this.locations[this.pos];
    }

  }


  percentageRemaining() {
    var percent = Math.round(((this.pos+1) / this.locations.length) * 100);
    return percent + "%";
  }

  showCorrect(ans) {
    console.log("show correct:" + ans.description);
    if (this.current.response === "") return false;

    var correctAnswerSelected = false;
    this.current.location.forEach(l => {
      if (this.current.response === l.description) correctAnswerSelected = true;
    });

    if (correctAnswerSelected) return false;

    var highlightCorrectAnswer = false;
    this.current.location.forEach(l => {
      if (l.description === ans.description)  highlightCorrectAnswer=true;
    });

    return highlightCorrectAnswer;
  }

}
