import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavsComponent } from './navs/navs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [
  { path: 'alerts', component: AlertsComponent, title: 'Alerts' },
  { path: 'badge', component: BadgeComponent, title: 'Badge' },
  { path: 'breadcrumb', component: BreadcrumbComponent, title: 'Breadcrumb' },
  { path: 'buttons', component: ButtonsComponent, title: 'Buttons' },
  { path: 'modal', component: ModalComponent, title: 'Modal' },
  { path: 'navbar', component: NavbarComponent, title: 'Navbar' },
  { path: 'navs', component: NavsComponent, title: 'Navs' },
  { path: 'pagination', component: PaginationComponent, title: 'Pagination' },
  { path: 'popover', component: PopoverComponent, title: 'Popover' },
  { path: 'tooltip', component: TooltipComponent, title: 'Tooltip' },
  { path: 'spinner', component: SpinnerComponent, title: 'Spinner' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
