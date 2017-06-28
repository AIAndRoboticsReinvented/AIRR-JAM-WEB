import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

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

/// Components....
import { DashboardComponent }           from './dashboard.component';
import { DashNavComponent }             from '../dash-nav/dash-nav.component';
import { MemberHeaderComponent }        from '../member-header/member-header.component';
import { DashWelcomeComponent }         from '../dash-welcome/dash-welcome.component';
import { PrivacyComponent }             from '../privacy/privacy.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard/:visitorid',
        component: DashboardComponent,
        children: [
        //    { path: '', redirectTo: '/home', pathMatch:'full' },
            { path: '', component: DashWelcomeComponent },
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
        DashWelcomeComponent,
        DashboardComponent,
        MemberHeaderComponent,
        DashNavComponent,

    ],
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }
