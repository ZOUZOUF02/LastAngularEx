import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students : StudentInfo[] = []
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.GetStudents()
  }
  ListeningToChild(ValueReceivedFromChild : number) //in case we wanted to put st-info inside students html
  {
    console.log("Parent listened to Child" + ValueReceivedFromChild)
  }
GetStudents()
{
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data : any) => {
    data.forEach((e : any) => {
      var s = new StudentInfo()
      s.name = e.name
      s.id = e.id
      s.username = e.username
      this.students.push(s)
    });
  })
}
}
export class StudentInfo
{
  name : string = ''
  id : number = 0
  username : string = ''
  note : number = 0
}
