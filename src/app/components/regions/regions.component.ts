import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css'],
})

export class RegionsComponent implements OnInit {
  public regions: string[];
  public selectedRegion: string;
  private listState: string;

  constructor() {

    this.regions = ['asia', 'americas', 'africa', 'europe', 'oceania', 'polar'];
  }

  ngOnInit() {
  }

}
