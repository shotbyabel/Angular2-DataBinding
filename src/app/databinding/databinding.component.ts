import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  stringInterpolation = 'this is string interpolation in action!';
  numberInterpolation = 8;

  // constructor() { }

  // ngOnInit() {
  // }

}
