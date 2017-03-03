import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { AboutComponent }       from './about.component';
import { AppComponent }         from './app.component';
import { BuyAHomeComponent }    from './buyahome.component';
import { ContactUsComponent }   from './contactus.component';
import { FAQComponent }         from './f-a-q.component';
import { FooterComponent }      from './footer.component';
import { HeaderComponent }      from './header.component';
import { HomeComponent }        from './home.component';
import { InvestorsComponent }   from './investors.component';
import { PageTitleComponent }   from './pagetitle.component';
import { PrivacyComponent }     from './privacy.component';
import { PropertiesComponent }  from './properties.component';
import { PropertySummaryComponent } from './property-summary.component';

import { SellYourHomeComponent } from './sellyourhome.component';

import { TeamComponent }        from './team.component';
import { TeammemberComponent }  from './teammember.component';
import { TeamService }          from './team.service';

import { TermsComponent }       from './terms.component';

import { WholesaleComponent }   from './wholesale.component';

import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HerosComponent }       from './heros.component';
import { HeroService }          from './hero.service';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule
 ],
  declarations: [
      AboutComponent,
      AppComponent,
      BuyAHomeComponent,
      ContactUsComponent,
      FAQComponent,
      FooterComponent,
      HeaderComponent,
      HomeComponent,
      InvestorsComponent,
      PageTitleComponent,
      PrivacyComponent,
      PropertiesComponent,
      PropertySummaryComponent,
      SellYourHomeComponent,
      TeamComponent,
      TeammemberComponent,
      TermsComponent,
      WholesaleComponent,
    DashboardComponent,
    HeroDetailComponent, 
    HerosComponent 
],
  providers:    [ HeroService, TeamService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
