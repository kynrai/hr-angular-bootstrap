import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecksRadiosComponent } from './checks-radios/checks-radios.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  { path: 'checks-radios', component: ChecksRadiosComponent, title: 'Checks & Radios' },
  { path: 'form-control', component: FormControlsComponent, title: 'Form controls' },
  { path: 'input-group', component: InputGroupComponent, title: 'Input group' },
  { path: 'select', component: SelectComponent, title: 'Select' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
