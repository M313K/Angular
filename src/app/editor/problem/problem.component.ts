import { AfterViewInit, Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { Submission } from '../Submission';
import { NgModule } from '@angular/core';
import * as ace from "ace-builds";
import "ace-builds/src-noconflict/ext-language_tools";
import { Execution } from '../Execution';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements AfterViewInit {
  @ViewChild("editor")
  private editor!: ElementRef<HTMLElement>;
  private aceEditor!: ace.Ace.Editor;
  submission:Submission={idSubmission:"Main",idProblem:1,script:"",language:"cpp"};
  execution:Execution={script:"",language:"cpp",testcase:"",idSubmission:"Main",memLimit:"512000000"};
  stdin:string="";
  @Output() SubmissionListener = new EventEmitter<Submission>();
  @Output() ExecutionListener = new EventEmitter<Execution>();

  constructor(private renderer: Renderer2) {
  }
  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
    this.aceEditor = ace.edit(this.editor.nativeElement);
    this.aceEditor.setTheme('ace/theme/twilight');
    
    this.aceEditor.session.setMode('ace/mode/c_cpp');
    this.aceEditor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
      maxLines: 30,
      minLines: 30
    });
  }
  
  printCode(): void {
    const code = this.aceEditor.getValue();
    console.log(code);
  }
  changeTheme(): void {
    const currentTheme = this.aceEditor.getTheme();
    if (currentTheme === 'ace/theme/chrome') {
      this.aceEditor.setTheme('ace/theme/twilight');
    } else {
      this.aceEditor.setTheme('ace/theme/chrome');
    }
  }
  setLanguage(language: string): void {
    let mode: string;
  
    if (language === 'cpp') {
      mode = 'ace/mode/c_cpp';
      this.submission.language='cpp'
      this.execution.language='cpp'
    } else if (language === 'java') {
      mode = 'ace/mode/java';
      this.submission.language='java'
      this.execution.language='java'
    } else if (language === 'python') {
      mode = 'ace/mode/python';
      this.submission.language='python'
      this.execution.language='pyhton'
    } else if (language === 'javascript') {
      mode = 'ace/mode/javascript';
      this.execution.language='javascript'
      this.submission.language='javascript'
    } else {
      return;
    }
  
    this.aceEditor.session.setMode(mode);
  }

  SubmitCode(){
    this.submission.script=this.aceEditor.getValue();
    this.SubmissionListener.emit(this.submission)
    //console.log(this.submission)
  }
  ExecuteCode(){
    
    this.execution.script=this.aceEditor.getValue()
    this.execution.testcase=this.stdin;
    this.ExecutionListener.emit(this.execution)
    //console.log(this.execution)
  }
  

}

