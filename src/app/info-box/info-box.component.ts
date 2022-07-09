import { Input , Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  @Input() Title!: string;
  @Input() Desc!: string;
  @Input() ImgUrl!: string;
  
  maxImage: boolean = false;
  minImage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  makeImageMaxSize(){
    this.minImage = false;
    this.maxImage = true;
  }

  makeImageMinSiza(){
    this.maxImage = false;
    this.minImage = true;
  }

}
