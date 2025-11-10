import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contentLinks = [
    { route: 'content/colors', title: 'Colors' },
    { route: 'content/header', title: 'Header' },
    { route: 'content/footer', title: 'Footer' },
    { route: 'content/typography', title: 'Typography' },
    { route: 'content/tables', title: 'Tables' },
  ];

  formsLinks = [
    { route: 'forms/checks-radios', title: 'Checks & Radios' },
    { route: 'forms/form-control', title: 'Form controls' },
    { route: 'forms/input-group', title: 'Input group' },
    { route: 'forms/select', title: 'Select' }
  ];

  componentLinks = [
    { route: 'components/alerts', title: 'Alerts' },
    { route: 'components/badge', title: 'Badge' },
    { route: 'components/breadcrumb', title: 'Breadcrumb' },
    { route: 'components/buttons', title: 'Buttons' },
    { route: 'components/modal', title: 'Modal' },
    { route: 'components/navbar', title: 'Navbar' },
    { route: 'components/navs', title: 'Navs' },
    { route: 'components/pagination', title: 'Pagination' },
    { route: 'components/popover', title: 'Popover' },
    { route: 'components/tooltip', title: 'Tooltip' },
    { route: 'components/spinner', title: 'Spinner' }
  ];
}
