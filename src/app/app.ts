import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSidebar } from '@app/app-sidebar/app-sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppSidebar],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('spendlyx-front');
}
