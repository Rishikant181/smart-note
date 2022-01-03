import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth/auth.guard';
import { DashboardComponent } from 'src/app/accounts/dashboard/dashboard.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { AccountCreationComponent } from 'src/app/accounts/account-creation/account-creation.component';

// Adding route links
const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'accounts/create', component: AccountCreationComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }