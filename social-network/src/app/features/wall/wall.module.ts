import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './wall/wall.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: WallComponent
    }
];

@NgModule({
    declarations: [WallComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class WallModule {}