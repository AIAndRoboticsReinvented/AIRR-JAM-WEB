import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// Import HttpClientModule from @angular/common/http
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
///Google Maps Component//
import { AgmCoreModule } from '@agm/core';
//import { LocationAutocompleteComponent } from 'ng2-location-autocomplete';
//Google Maps API 
//import { } from '@types/google-maps';

/// Image Uploader
//import { ImageUploadModule } from 'angular2-image-upload'

/// Google maps. 
///import { AgmCoreModule } from 'angular2-google-maps/core';
 

import { StateMachineService } from './statemachine.service';
import { TeamService } from './team.service';
import { ContactRequestService } from './contact-request.service';
import { SqueezePageService } from './squeeze-page.service';
import { ReportService } from './report.service';
import { IUDService } from './iud.service';




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
import { FeaturesComponent } from './features/features.component';
import { HomeweareComponent } from './homeweare/homeweare.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { LPUXComponent } from './lp-ux/lp-ux.component';
import { TestdeskComponent } from './testdesk/testdesk.component';
import { MobimenuComponent } from './mobimenu/mobimenu.component';
import { TestDesk2Component } from './test-desk2/test-desk2.component';
import { NewsrefComponent } from './newsref/newsref.component';
//import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
//import { ImguploadrequestComponent } from './imguploadrequest/imguploadrequest.component';




//import { ProspectComponent } from './prospect/prospect.component';
//import { ImageUploadComponent } from './image-upload/image-upload.component';
//import { LocatorComponent } from './locator/locator.component';


@NgModule({
  declarations: [
      AboutComponent,
      AppComponent,
      BuyahomeComponent,
      ContactRequestComponent,
      ContactusComponent,
      FaqComponent,
      FeaturedComponent,
      //FileSelectDirective,
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
      FeaturesComponent,
      HomeweareComponent,
      CarouselComponent,
      ModalComponent,
      LPUXComponent,
      PageNotFoundComponent,
      TestdeskComponent,
      MobimenuComponent,
      TestDesk2Component,
      NewsrefComponent,
      //ImguploadrequestComponent,

      //ProspectComponent,
      //ImageUploadComponent,
      //LocatorComponent,
  ],
  imports: [      
      BrowserModule.withServerTransition({ appId: 'ang4-seo-pre' }),
      CommonModule,
      FormsModule,
      HttpModule,
      ///GoogleMaps///
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCyubuZfrveaznNqBOpts8dHEIGsR0vhj0'
      }),
      //ImageUploadModule.forRoot(),
  
///      AgmCoreModule.forRoot({ apiKey: 'AIzaSyCkiDx9O54GaP1FG2eOzXOjZB-ffqAbEzg'}),  /// Google Maps
///      ImageUploadModule.forRoot(),     /// Image Uploader
      DashboardRoutingModule,
      AppRoutingModule,     /// <--- This MUST be last
  ],
  providers: [
      StateMachineService,
      TeamService,
      PropertyService,
      ContactRequestService,
      SqueezePageService,
      ReportService,
      IUDService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { } 
