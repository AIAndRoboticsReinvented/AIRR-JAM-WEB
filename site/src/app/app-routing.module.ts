import { NgModule }                           from '@angular/core';
import { RouterModule, Routes }               from '@angular/router';

import { AboutComponent }                     from './about/about.component';
import { BuyahomeComponent }                  from './buyahome/buyahome.component';
import { ContactusComponent }                 from './contactus/contactus.component';
import { FaqComponent }                       from './faq/faq.component';
import { FeaturedComponent }                  from './featured/featured.component';
import { InvestorsComponent }                 from './investors/investors.component';
import { HomeComponent }                      from './home/home.component';
import { HtmlComponent }                      from './html/html.component';
import { LandyComponent }                     from './landy/landy.component';
import { PrivacyComponent }                   from './privacy/privacy.component';
import { SellyourhomeComponent }              from './sellyourhome/sellyourhome.component';
import { TermsComponent }                     from './terms/terms.component';
import { TestimonialsComponent }              from './testimonials/testimonials.component'
import { VideaComponent }                     from './videa/videa.component';
import { WholesaleComponent }                 from './wholesale/wholesale.component';
//import { ProspectPropertyComponent }          from './prospect-property/prospect-property.component';
import { LoginComponent }                     from './login/login.component';
import { PageNotFoundComponent }              from './page-not-found/page-not-found.component';
import { HomeweareComponent }                 from './homeweare/homeweare.component'

const routes: Routes = [
    { path: '',                       redirectTo: '/home',                                pathMatch: 'full' },
    { path: 'about',                  component: AboutComponent },
    { path: 'buy',                    component: BuyahomeComponent },
    { path: 'contactus',              component: ContactusComponent },
    { path: 'faq',                    component: FaqComponent },
    { path: 'featured',               component: FeaturedComponent },
    { path: 'home',                   component: HomeComponent },
    { path: 'html/:id',               component: HtmlComponent },
    { path: 'investors',              component: InvestorsComponent },
    { path: 'landy',                  component: LandyComponent},
    { path: 'login',                  component: LoginComponent },
    { path: 'privacy',                component: PrivacyComponent },
    { path: 'sell',                   component: SellyourhomeComponent },
    { path: 'terms',                  component: TermsComponent },
    { path: 'testimonials',           component: TestimonialsComponent },
    { path: 'videa/:id',              component: VideaComponent },
    { path: 'wholesale',              component: WholesaleComponent },
    { path: '**',                     component: PageNotFoundComponent },
    { path: 'homeweare',              component: HomeweareComponent },
//    { path: 'prospect', component: ProspectPropertyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
