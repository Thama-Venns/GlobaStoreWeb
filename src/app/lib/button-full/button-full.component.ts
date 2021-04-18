import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button-full',
  templateUrl: './button-full.component.html',
  styleUrls: ['./button-full.component.scss']
})
export class ButtonFullComponent implements OnInit {

  @Input() label:string;
  constructor() { }

  ngOnInit(): void {
  }

}
