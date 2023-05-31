import { Component } from '@angular/core';
import { Marks } from 'src/models/marksData';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent {
  marks: Marks[] = [
    {
      subject: "Algorithms",
      maximumMarks: 50,
      marksObtained: 40,
    },
    {
      subject: "Data Structures",
      maximumMarks: 50,
      marksObtained: 40,
    },
    {
      subject: "Operating System",
      maximumMarks: 50,
      marksObtained: 40,
    },
    {
      subject: "Computer Networks",
      maximumMarks: 50,
      marksObtained: 40,
    },
    {
      subject: "DBMS",
      maximumMarks: 50,
      marksObtained: 40,
    }
    
  ]
}
