import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cookingSample';

  infoBoxes = [
    {
      Title: 'Heavenly Halibut',
      Desc: 'When it comes to seafood, halibut is hard to beat. This delicious white fish is not only prized for its delicate flavor but also its versatility. Halibut can be baked, grilled, mashed, or even used in a hearty stew.',
      ImgUrl: '../assets/img/Heavenly-Halibut.jpg.webp'
    },
    {
      Title: 'Baked Haddock',
      Desc: 'Baked haddock is a delicious, healthy seafood dish perfect for a weeknight meal. The fish cover in a light breadcrumb and herb crust, then baked until flaky and tender.',
      ImgUrl: '../assets/img/Baked-Haddock.jpg.webp'
    },
    {
      Title: 'Easy Tuna Casserole',
      Desc: 'Who says easy and delicious cant go hand-in-hand? This easy tuna casserole recipe proves you can have your cake and eat it too.',
      ImgUrl: '../assets/img/Easy-Tuna-Casserole.jpg.webp'
    },
    {
      Title: 'Scrumptious Salmon Cakes',
      Desc: 'As any seafood lover knows, few things are as delicious as a salmon cake. These bite-sized morsels are with flavor, and their crispy exterior perfectly contrasts the moist and flaky fish within.',
      ImgUrl: '../assets/img/Scrumptious-Salmon-Cakes.jpg.webp'
    } 
  ]



}
