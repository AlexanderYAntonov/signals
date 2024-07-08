import { Routes } from '@angular/router';
import { SignalsTestComponent } from './signals-test/signals-test.component';
import { DeferViewComponent } from './defer-view/defer-view.component';

export const routes: Routes = [
    { path: 'signals', component: SignalsTestComponent },
    { path: 'deferview', component: DeferViewComponent },
];
