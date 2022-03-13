import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentViewComponent } from './agent-view/agent-view.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', component: LoginComponent},  
    {path: 'home', component: HomeComponent},
    {path: 'agents', component: AgentViewComponent},
    {path: 'agents/:id', component: AgentViewComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
