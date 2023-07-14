import { Component } from '@angular/core';
import { Execution } from '../Execution';
import { Submission } from '../Submission';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-problem-container',
  templateUrl: './problem-container.component.html',
  styleUrls: ['./problem-container.component.css']
})
export class ProblemContainerComponent {
  constructor(private editorService:EditorService){}
  Execute(execution:Execution){
      console.log(execution);
      this.editorService.Execute(execution).subscribe((res) => {
        console.log(res)
      },
      (err) => (console.log(err))
      );
  }
  Submit(submission:Submission){
      console.log(submission);
      this.editorService.Submite(submission).subscribe((res) => {
      },
      (err) => (console.log(err))
      );
  }
}
