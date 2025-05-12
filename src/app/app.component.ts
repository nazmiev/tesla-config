import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ConfiguratorService } from './configurator.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  routerLinkActive: string;

  constructor(
    protected service: ConfiguratorService
  ) {
    this.routerLinkActive = '';
  }
}
