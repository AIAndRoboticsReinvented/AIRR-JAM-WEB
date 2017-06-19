import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { LocationAutocompleteComponent } from 'ng2-location-autocomplete';

/// Image Uploader
import { ImageUploadModule } from 'angular2-image-upload'

/// Google maps. 
///import { AgmCoreModule } from 'angular2-google-maps/core';


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


import { PropertyService } from './property.service';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WholesaleComponent } from './wholesale/wholesale.component';
import { ContactRequestComponent } from './contact-request/contact-request.component';
import { HtmlComponent } from './html/html.component';
import { VideoShowcaseComponent } from './video-showcase/video-showcase.component';
import { VideaComponent } from './videa/videa.component';
///import { ProspectPropertyComponent } from './prospect-property/prospect-property.component';
///import { GoogleMapComponent } from './google-map/google-map.component';
import { LoginComponent } from './login/login.component';
//import { MemberHeaderComponent } from './member-header/member-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

///import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

import { LandyComponent } from './landy/landy.component';
import { FeaturedComponent } from './featured/featured.component';
import { TestimonialsComponent } from './testimonials/testimonials.component'
import { TopnavComponent } from './topnav/topnav.component';
import { SocialComponent } from './social/social.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertySummaryComponent } from './property-summary/property-summary.component';
import { FeaturesComponent } from './features/features.component'

@NgModule({
  declarations: [
      AboutComponent,
      AppComponent,
      BuyahomeComponent,
      ContactRequestComponent,
      ContactusComponent,
      FaqComponent,
      FeaturedComponent,
      FooterComponent,

      HeaderComponent,
      HomeComponent,
      HtmlComponent,

      InvestorsComponent,
      LandyComponent,
      LoginComponent,

      PagetitleComponent,
      PrivacyComponent,
      PropertiesComponent,
      PropertySummaryComponent,

      SellyourhomeComponent,
      SocialComponent,
      TeamComponent,
      TeammemberComponent,
      TermsComponent,
      TestimonialsComponent,
      TopnavComponent,
      VideaComponent,
      VideoShowcaseComponent,

      WholesaleComponent,

///    ProspectPropertyComponent,
///    GoogleMapComponent,
//    MemberHeaderComponent,
    
  //  LocationAutocompleteComponent,
      PageNotFoundComponent,

      FeaturesComponent,


  ],
  imports: [      
      BrowserModule,
      FormsModule,
      HttpModule,
///      AgmCoreModule.forRoot({ apiKey: 'AIzaSyCkiDx9O54GaP1FG2eOzXOjZB-ffqAbEzg'}),  /// Google Maps
///      ImageUploadModule.forRoot(),     /// Image Uploader
      DashboardRoutingModule,
      AppRoutingModule,     /// <--- This MUST be last
  ],
  providers: [TeamService, PropertyService, ContactRequestService, SqueezePageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
