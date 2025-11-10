import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavsComponent } from './navs/navs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    AlertsComponent,
    BadgeComponent,
    NavsComponent,
    NavbarComponent,
    SpinnerComponent,
    PaginationComponent,
    BreadcrumbComponent,
    ModalComponent,
    PopoverComponent,
    TooltipComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgbModalModule,
    NgbPopoverModule,
    NgbTooltipModule
  ]
})
export class ComponentsModule { }
