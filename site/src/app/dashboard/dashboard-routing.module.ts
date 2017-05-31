import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }       from './dashboard.component';
import { MemberHeaderComponent }    from '../member-header/member-header.component';
import { DashWelcomeComponent }     from '../dash-welcome/dash-welcome.component';
import { PrivacyComponent }         from '../privacy/privacy.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: '/home', pathMatch:'full' },
            { path: ':id', component: DashWelcomeComponent }
        ],
    },
];

@NgModule({
    declarations: [
        MemberHeaderComponent,
        DashWelcomeComponent,
        DashboardComponent,
    ],
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }
