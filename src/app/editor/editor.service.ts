import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Submission } from './Submission';
import { Execution } from './Execution';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  submite_url='http://localhost:8080/problem/submit/1'
  execute_url='http://localhost:8080/problem/execute'
  problem_url='http://127.0.0.1:8000/GetProblemById'
  constructor(private http: HttpClient) { }
  Submite(submission:Submission)
  {
    console.log('works sub')
    return this.http.post(this.submite_url,submission).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  Execute(execution:Execution)
  {
    console.log('works exec')
    return this.http.post(this.execute_url,execution).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  GetProblem(id:number){
    this.problem_url=this.problem_url+"/"+id;
    return this.http.get(this.problem_url);
  }
}
