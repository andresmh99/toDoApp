import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LabsComponent } from './components/labs/labs.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'labs',
        component:LabsComponent
    }
];
