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
  
  transitionElements: boolean = false;
  backToNormalElements: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  makeTransition(){
    this.backToNormalElements = false;
    this.transitionElements = true;
  }

  backToNormal(){
    this.transitionElements = false;
    this.backToNormalElements = true;
  }

}
