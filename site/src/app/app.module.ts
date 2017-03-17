import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { TeamService } from './team.service';
import { ContactRequestService } from './contact-request.service';
import { SqueezePageService } from './squeeze-page.service';


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



import { SellyourhomeComponent } from './sellyourhome/sellyourhome.component';
import { BuyahomeComponent } from './buyahome/buyahome.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertySummaryComponent } from './property-summary/property-summary.component';


import { PropertyService } from './property.service';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WholesaleComponent } from './wholesale/wholesale.component';
import { ContactRequestComponent } from './contact-request/contact-request.component';
import { HtmlComponent } from './html/html.component';
import { VideoShowcaseComponent } from './video-showcase/video-showcase.component';
import { VideaComponent } from './videa/videa.component';

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
    ContactRequestComponent,
    HtmlComponent,
    VideoShowcaseComponent,
    VideaComponent
    
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TeamService, PropertyService, ContactRequestService, SqueezePageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
