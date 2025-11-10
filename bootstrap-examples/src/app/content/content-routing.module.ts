import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: 'colors', component: ColorsComponent, title: 'Colors' },
  { path: 'header', component: HeaderComponent, title: 'Header' },
  { path: 'footer', component: FooterComponent, title: 'Footer' },
  { path: 'tables', component: TablesComponent, title: 'Tables' },
  { path: 'typography', component: TypographyComponent, title: 'Typography' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
