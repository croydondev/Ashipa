import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperatorsComponent } from './operators/operators.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: 'operator/main', component: MainComponent },
    { path: 'operator/login', component: LoginComponent },
    { path: 'operator/register', component: RegisterComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class OperatorsRoutingModule {}
