import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featuresSelected = new EventEmitter<string>();

  onSelect(features: string) {
    this.featuresSelected.emit(features);
  }
  constructor() { }

  ngOnInit() {
  }

}
