import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent implements OnInit {

  @Input() public parentData;
  constructor() { }

  ngOnInit(): void {
  }

}
