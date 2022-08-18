import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() search : string = 'hello';
  regions : string[] = ["Asia", "Europe", "North America", "South America", "Oceania", "Africa", "Carribean"]
  constructor() { }
  @Output() SearchContent = new EventEmitter<string>()
  ngOnInit(): void {
  }
  HandleChange()
  {
    this.SearchContent.emit(this.search)
    console.log(this.search)
  }
  Search()
  {
    alert("hi")
  }
}
