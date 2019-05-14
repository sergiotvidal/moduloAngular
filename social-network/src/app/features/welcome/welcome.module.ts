import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeHeroComponent } from './welcome-hero/welcomehero.component';
import { WelcomeFormsComponent } from './welcome-forms/welcomeforms.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{
  path: '',
  component: WelcomeComponent
}];
@NgModule({
  declarations: [WelcomeComponent, WelcomeHeroComponent, WelcomeFormsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class WelcomeModule {}