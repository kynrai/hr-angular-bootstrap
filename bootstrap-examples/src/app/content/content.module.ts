import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { ColorsComponent } from './colors/colors.component';
import { HexToRgbPipe } from './hex-to-rgb.pipe';

@NgModule({
  declarations: [
    TypographyComponent,
    TablesComponent,
    HeaderComponent,
    FooterComponent,
    ColorsComponent,
    HexToRgbPipe,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
