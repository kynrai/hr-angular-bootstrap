import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {
  blues = [
    { name: '050', hex: '#001127' },
    { name: '100', hex: '#001c39' },
    { name: '150', hex: '#00264b' },
    { name: '200', hex: '#00315d' },
    { name: '250', hex: '#003c70' },
    { name: '300', hex: '#004883' },
    { name: '350', hex: '#005497' },
    { name: '400', hex: '#0060ab' },
    { name: '450', hex: '#006cc0' },
    { name: '500', hex: '#0077d4' },
    { name: '550', hex: '#0085eb' },
    { name: '600', hex: '#3b92f4' },
    { name: '650', hex: '#559fff' },
    { name: '700', hex: '#77acff' },
    { name: '750', hex: '#92baff' },
    { name: '800', hex: '#aac7ff' },
    { name: '850', hex: '#c1d5ff' },
    { name: '900', hex: '#d6e3ff' },
    { name: '950', hex: '#ebf1ff' }
  ];

  greens = [
    { name: '050', hex: '#071405'},
    { name: '100', hex: '#0f200a'},
    { name: '150', hex: '#162b10'},
    { name: '200', hex: '#1d3616'},
    { name: '250', hex: '#25421c'},
    { name: '300', hex: '#2c4f23'},
    { name: '350', hex: '#345c29'},
    { name: '400', hex: '#3d6930'},
    { name: '450', hex: '#457637'},
    { name: '500', hex: '#4d823e'},
    { name: '550', hex: '#569246'},
    { name: '600', hex: '#5fa04d'},
    { name: '650', hex: '#68ae55'},
    { name: '700', hex: '#72bd5c'},
    { name: '750', hex: '#7bcc64'},
    { name: '800', hex: '#84db6c'},
    { name: '850', hex: '#8eea74'},
    { name: '900', hex: '#abf599'},
    { name: '950', hex: '#d5fbce'}
  ];

  limes = [
    { name: '050', hex: '#111200'},
    { name: '100', hex: '#1c1d00'},
    { name: '150', hex: '#262800'},
    { name: '200', hex: '#313300'},
    { name: '250', hex: '#3c3e00'},
    { name: '300', hex: '#474a00'},
    { name: '350', hex: '#535600'},
    { name: '400', hex: '#5f6200'},
    { name: '450', hex: '#6b6f00'},
    { name: '500', hex: '#777b00'},
    { name: '550', hex: '#858900'},
    { name: '600', hex: '#929700'},
    { name: '650', hex: '#9fa400'},
    { name: '700', hex: '#adb200'},
    { name: '750', hex: '#bac000'},
    { name: '800', hex: '#c8cf00'},
    { name: '850', hex: '#d6dd00'},
    { name: '900', hex: '#e4e97c'},
    { name: '950', hex: '#f2f6aa'}
  ];

  purples = [
    { name: '050', hex: '#110738'},
    { name: '100', hex: '#1b0e50'},
    { name: '150', hex: '#261567'},
    { name: '200', hex: '#301c7f'},
    { name: '250', hex: '#3b2398'},
    { name: '300', hex: '#4727b8'},
    { name: '350', hex: '#5329db'},
    { name: '400', hex: '#5e36ee'},
    { name: '450', hex: '#6b48f8'},
    { name: '500', hex: '#7658ff'},
    { name: '550', hex: '#846cff'},
    { name: '600', hex: '#917eff'},
    { name: '650', hex: '#9e8fff'},
    { name: '700', hex: '#ab9fff'},
    { name: '750', hex: '#b9afff'},
    { name: '800', hex: '#c6bfff'},
    { name: '850', hex: '#d4cfff'},
    { name: '900', hex: '#e2dfff'},
    { name: '950', hex: '#f1efff'}
  ];

  reds = [
    { name: '050', hex: '#28040d'},
    { name: '100', hex: '#3a0717'},
    { name: '150', hex: '#4c0c20'},
    { name: '200', hex: '#5e1229'},
    { name: '250', hex: '#721833'},
    { name: '300', hex: '#841f3d'},
    { name: '350', hex: '#972748'},
    { name: '400', hex: '#aa3052'},
    { name: '450', hex: '#bd395e'},
    { name: '500', hex: '#ce4169'},
    { name: '550', hex: '#e74874'},
    { name: '600', hex: '#ed6184'},
    { name: '650', hex: '#f27793'},
    { name: '700', hex: '#f68ba2'},
    { name: '750', hex: '#fa9fb1'},
    { name: '800', hex: '#fdb2c0'},
    { name: '850', hex: '#ffc6d0'},
    { name: '900', hex: '#ffd9df'},
    { name: '950', hex: '#ffecef'}
  ];

  grays = [
    { name: '050', hex: '#111111' },
    { name: '100', hex: '#1b1b1b' },
    { name: '150', hex: '#262626' },
    { name: '200', hex: '#303030' },
    { name: '250', hex: '#3b3b3b' },
    { name: '300', hex: '#474747' },
    { name: '350', hex: '#525252' },
    { name: '400', hex: '#5e5e5e' },
    { name: '450', hex: '#6a6a6a' },
    { name: '500', hex: '#777777' },
    { name: '550', hex: '#848484' },
    { name: '600', hex: '#919191' },
    { name: '650', hex: '#9e9e9e' },
    { name: '700', hex: '#ababab' },
    { name: '750', hex: '#b9b9b9' },
    { name: '800', hex: '#c6c6c6' },
    { name: '850', hex: '#d4d4d4' },
    { name: '900', hex: '#e2e2e2' },
    { name: '950', hex: '#f1f1f1' }
  ];
}
