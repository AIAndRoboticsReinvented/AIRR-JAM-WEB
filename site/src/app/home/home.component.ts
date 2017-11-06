import { Component, OnInit, NgModule } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = "I Buy As Is | Home";
    tiles: {};

    constructor(meta: Meta, title: Title) {
        title.setTitle('Home')
        meta.addTags([
            {
               name: 'author', content: 'ibuyasis.com'
            },
            {
                name: 'keywords', content: 'i buy as is, ugly houses, homes for sale, cash now, quick cash, house investment,sell houses online'
            },
            {
                name: 'description', content: 'I Buy As Is, Inc. is a premier real estate solutions company, and since our inception we have been helping homeowners along with improving communities in each city we work in.'
            },
        ])
    }

  ngOnInit() {
      this.tiles = [
          {
           img: 'assets/images/slideshow/charity2.jpg', title: 'Giving Back',
           caption: 'I Buy As Is, Inc. Gives network of companies dedicated to giving back to our community. We are passionate about philanthropy and we have had the honor of working with amazing organizations like Habitat for Humanity and the Red Cross. I Buy As Is, Inc. is the Tampa Bay area’s prime real estate investment company. With over 45 years of combined expertise we are able to help homeowners overcome a multitude of financial situations. We recognize that each situation is different, we take great pride in catering to each individual homeowners needs. We are capable of buying homes and making cash offers with a fast and efficient process. We also rehabilitate numerous properties throughout our area in order to assist in the redevelopment of our local communities with a proven track record.', slide: 0
          },
          { img: 'assets/images/slideshow/yourteam.jpg', title: 'Our team works for you and YOURS.', caption:'With our extensive Real Estate specialties including but not limited to: Avoiding Foreclosure, Divorce or Land Disputes, and Costly Home Repairs; we can help you and your family sell your home and free youself from the burden that it carried.', slide: 1 },
          { img: 'assets/images/slideshow/home.jpg',title:'Real Estate Specialties' ,caption: 'Foreclosure Avoidance Debt Removal or Renegotiation, Bank Owned Property & REO’s, Sell Your Property Without Realtor Commissions, Solving Title Issues, Vacant Properties & Houses in Major Disrepair, Environmental or Structural Problems,  Apartment & House Rental Specialists, Bankruptcy Over-Leveraged Properties, Clearing up Judgments or Outside Liens', slide: 2 },
          { img: 'assets/images/slideshow/WWA-2-nologo.jpg',title:'We are...' ,caption: 'I Buy As Is, Inc. is the areas’ premier real estate solutions company, and since our inception we have been helping homeowners along with improving communities in each city we work in. Through our extensive knowledge of the business, network of resources, and years of expertise, we can assist homeowners with a wide variety of real estate problems. We pride ourselves on our reputation for working one-on-one with each customer to handle their individual situations.Our mission is to rejuvenate neighborhoods and increase the standard of living by improving the overall quality of housing for the residents. Call us today and let’s see how we can work together!', slide: 3 }
      ];
 
  }
}
