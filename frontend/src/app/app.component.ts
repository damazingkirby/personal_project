import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {ExamsApiService} from './exams/exams-api.service';
import {Exam, superman} from './exams/exam.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  examsListSubs: Subscription;
  examsList: Exam[];
  
  superman: {
    title: "superman",
    description: "il n'y a pas de description qui tienne"
}

  constructor(private examsApi: ExamsApiService) {
  }

  ngOnInit() {
    this.examsListSubs = this.examsApi
      .getExams()
      .subscribe(res => {
          this.examsList = res;
        },
        console.error
      );
    
    this.examsListSubs = this.examsApi
        .postExams()
        .subscribe();
    
    console.log(superman);
  }


  ngOnDestroy() {
    this.examsListSubs.unsubscribe();
  }
}