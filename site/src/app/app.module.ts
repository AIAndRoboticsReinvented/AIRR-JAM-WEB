import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { FaqComponent } from './faq/faq.component';
import { InvestorsComponent } from './investors/investors.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { TeammemberComponent } from './teammember/teammember.component';


import { TeamService } from './team.service';
import { SellyourhomeComponent } from './sellyourhome/sellyourhome.component';
import { BuyahomeComponent } from './buyahome/buyahome.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertySummaryComponent } from './property-summary/property-summary.component';


import { PropertyService } from './property.service';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WholesaleComponent } from './wholesale/wholesale.component';
import { ContactRequestComponent } from './contact-request/contact-request.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PagetitleComponent,
    FaqComponent,
    InvestorsComponent,
    ContactusComponent,
    AboutComponent,
    TeamComponent,
    TeammemberComponent,
    SellyourhomeComponent,
    BuyahomeComponent,
    PropertiesComponent,
    PropertySummaryComponent,
    TermsComponent,
    PrivacyComponent,
    WholesaleComponent,
    ContactRequestComponent
    
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TeamService, PropertyService],
  bootstrap: [AppComponent]
})

export class AppModule { }
