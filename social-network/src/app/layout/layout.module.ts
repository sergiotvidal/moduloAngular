import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SecondLayoutComponent } from './second-layout/second-layout.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainLayoutComponent, SecondLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent]
})
export class LayoutModule {}