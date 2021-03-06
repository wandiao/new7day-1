import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-grid',
  templateUrl: './text-grid.component.html',
  styleUrls: ['./text-grid.component.less']
})
export class TextGridComponent implements OnInit {

  @Input() name: string;
  @Input() content: string;
  constructor() { }

  ngOnInit() {
  }

}
