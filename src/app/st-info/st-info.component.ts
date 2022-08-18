import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Route, ActivatedRoute, ParamMap } from '@angular/router';
import { StudentInfo } from '../student/student.component';
@Component({
  selector: 'app-st-info',
  templateUrl: './st-info.component.html',
  styleUrls: ['./st-info.component.css']
})
export class StInfoComponent implements OnInit {
  st = new StudentInfo()
  id : string | null = ''
  @Output() NoteHasChanged = new EventEmitter<number>();
  constructor(private route : ActivatedRoute, private http : HttpClient) { }
  GetID()
  {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id)
    });
  }
  HandleChange()
  {
    this.NoteHasChanged.emit(this.st.note)
    console.log(this.st.note)
  }
  GetStudent()
{
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data : any) => {
    data.forEach((e : any) => {
      if(this.id == e.id)
      {
        this.st = e
      }
    });
  })
}
  ngOnInit(): void {
    this.GetID()
    this.GetStudent()
  }

}
