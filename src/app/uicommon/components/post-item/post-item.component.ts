import { Component, Input, OnInit } from '@angular/core';
import { PostConfig } from '../../models/post-config';



@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() oPostConfig: PostConfig | any = {};

  public oImgDim = {height: '', width: ''};

  constructor() { }

  ngOnInit(): void {
    this.fnComputeImgDim();
  }

  private fnComputeImgDim(): void {
    switch(this.oPostConfig.nImgSize) {
      case 0: {
        this.oImgDim = {height: 'auto', width: '100px'};
        break;
      }
      case 1: {
        this.oImgDim = {height: 'auto', width: '210px'};
        break;
      }
      case 2: {
        this.oImgDim = {height: '120px', width: '310px'};
        break;
      }
      case 3: {
        this.oImgDim = {height: '240px', width: '330px'};
        break;
      }
    }
  }

}
