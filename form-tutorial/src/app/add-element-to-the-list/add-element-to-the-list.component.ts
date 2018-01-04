import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-element-to-the-list',
  templateUrl: './add-element-to-the-list.component.html',
  styleUrls: ['./add-element-to-the-list.component.css']
})
export class AddElementToTheListComponent implements OnInit {

  fruits = ['apple', 'cherry', 'orange'];
  addFruit(newFruit: string) {
    if (newFruit) {
      this.fruits.push(newFruit);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
