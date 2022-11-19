import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsScreenComponent } from './containers/actions-screen/actions-screen.component';
import { InputScreenComponent } from './containers/input-screen/input-screen.component';
import { DataExistsGuard } from './guards/data-exists/data-exists.guard';

const routes: Routes = [
  { path: '', component: InputScreenComponent, },
  {
    path: 'actions',
    component: ActionsScreenComponent,
    canActivate: [ DataExistsGuard ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
