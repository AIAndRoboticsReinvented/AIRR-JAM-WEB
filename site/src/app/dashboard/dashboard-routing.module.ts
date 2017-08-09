import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { BrowserModule }                from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/// Icons.....
import { IconCompanyComponent }         from '../icon-company/icon-company.component';

    /// Security
import { IconAddSecurityComponent }     from '../icon-add-security/icon-add-security.component';
import { IconDeleteSecurityComponent }  from '../icon-delete-security/icon-delete-security.component';
import { IconEditSecurityComponent }    from '../icon-edit-security/icon-edit-security.component';

  /// Component
import { IconAddComponentComponent }    from '../icon-add-component/icon-add-component.component';
import { IconDeleteComponentComponent } from '../icon-delete-component/icon-delete-component.component';
import { IconEditComponentComponent }   from '../icon-edit-component/icon-edit-component.component';


/// VALOR-SOFTWARE NG2-CHARTS
import { ChartsModule }                 from 'ng2-charts';

/// Components....
import { DashboardComponent }           from './dashboard.component';
import { DashNavComponent }             from '../dash-nav/dash-nav.component';
import { DashWelcomeComponent }         from '../dash-welcome/dash-welcome.component';

import { MemberAboutComponent }         from '../member-about/member-about.component';
import { MemberHeaderComponent }        from '../member-header/member-header.component';

import { PieTextingComponent }         from '../pie-texting/pie-texting.component';

import { PrivacyComponent }             from '../privacy/privacy.component';

import { ReportDialerSurveyComponent } from '../report-dialer-survey/report-dialer-survey.component';
import { ReportSiteContactrequestsComponent } from '../report-site-contactrequests/report-site-contactrequests.component';
import { ReportSmsBlockedComponent }    from '../report-sms-blocked/report-sms-blocked.component';
import { ReportSmsBlockreasonsComponent } from '../report-sms-blockreasons/report-sms-blockreasons.component';
import { ReportSmsResponsesComponent }  from '../report-sms-responses/report-sms-responses.component';
import { ReportSmsSendStatsComponent }  from '../report-sms-send-stats/report-sms-send-stats.component';

import { TitleComponent }               from '../title/title.component';
import { ToolBarComponent }             from '../tool-bar/tool-bar.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard/:visitorid',
        component: DashboardComponent,
        children: [
        //    { path: '', redirectTo: '/home', pathMatch:'full' },
            
            { path: 'about',                        component: MemberAboutComponent },
            { path: 'reportdialersurvey',           component: ReportDialerSurveyComponent },          
            { path: 'reportsitecontactrequests',    component: ReportSiteContactrequestsComponent},
            { path: 'reportsmsresponses',           component: ReportSmsResponsesComponent },
            { path: 'reportsmsblocked',             component: ReportSmsBlockedComponent },
            { path: 'reportsmsblockreasons',        component: ReportSmsBlockreasonsComponent },
            { path: 'reportsmssendstats',           component: ReportSmsSendStatsComponent },          
            { path: '',                             component: DashWelcomeComponent },
        ],
    },
];

@NgModule({
    declarations: [
/// Icons
        IconCompanyComponent,

        /// ... Security
        IconAddSecurityComponent,
        IconDeleteSecurityComponent,
        IconEditSecurityComponent,

        /// ... Component
        IconAddComponentComponent,
        IconDeleteComponentComponent,
        IconEditComponentComponent,

/// Components
        DashboardComponent,
        DashNavComponent,
        DashWelcomeComponent,
        MemberAboutComponent,
        MemberHeaderComponent,
        PieTextingComponent,
        ReportDialerSurveyComponent,
        ReportSiteContactrequestsComponent,
        ReportSmsBlockedComponent,
        ReportSmsBlockreasonsComponent,
        ReportSmsResponsesComponent,
        ReportSmsSendStatsComponent,
        TitleComponent,
        ToolBarComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        ChartsModule,
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }

