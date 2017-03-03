import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }       from './about.component';
import { BuyAHomeComponent }    from './buyahome.component';
import { ContactUsComponent }   from './contactus.component';
import { FAQComponent }         from './f-a-q.component';
import { InvestorsComponent }   from './investors.component';
import { HomeComponent }        from './home.component';
import { PrivacyComponent }     from './privacy.component';
import { SellYourHomeComponent } from './sellyourhome.component';
import { TermsComponent }       from './terms.component';
import { WholesaleComponent }   from './wholesale.component';





import { DashboardComponent } from './dashboard.component';
import { HerosComponent }       from './heros.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'buy', component: BuyAHomeComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'faq', component: FAQComponent },
    { path: 'heros', component: HerosComponent },
    { path: 'home', component: HomeComponent },
    { path: 'investors', component: InvestorsComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'sell', component: SellYourHomeComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'wholesale', component: WholesaleComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
