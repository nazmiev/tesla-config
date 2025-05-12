import { OverviewComponent } from './overview/overview.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step2Guard } from './step2.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'step1', component: Step1Component },
    // { path: 'step2', component: Step2Component },
    { path: 'step2', component: Step2Component, canActivate: [Step2Guard] },
    { path: 'overview', component: OverviewComponent },
    { path: '**', component: OverviewComponent },
];
