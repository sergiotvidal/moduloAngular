import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SecondLayoutComponent } from './layout/second-layout/second-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: './features/welcome/welcome.module#WelcomeModule'
  },
  {
    path: '',
    
    component: SecondLayoutComponent,

    children: [
      {
        path: 'about',
        loadChildren: './features/about/about.module#AboutModule'
      },
      {
        path: '',
    
        component: MainLayoutComponent,
    
        children: [
          {
            path: 'wall',
            loadChildren: './features/wall/wall.module#WallModule'
          },
          {
            path: 'my-account',
            loadChildren: './features/my-account/my-account.module#MyAccountModule'
          }
        ]
      }

    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

