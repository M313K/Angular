import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';
import { ProblemComponent } from './problem/problem.component';
import { FormsModule } from '@angular/forms';
import { ProblemContainerComponent } from './problem-container/problem-container.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    DescriptionComponent,
    ProblemComponent,
    ProblemContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DescriptionComponent,
    ProblemComponent,
    ProblemContainerComponent
  ]
})
export class EditorModule { }
