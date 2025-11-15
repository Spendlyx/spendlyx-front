import { Component, computed, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from '@app/app.service';
import { SidebarService } from '@app/sidebar/services/sidebar.service';
import { Sidebar } from '@app/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.html',
})
export class App {
  constructor(
    public sidebarService: SidebarService,
    public appService: AppService
  ) {
    this.appService.updateViewport();
  }

  readonly isSidebarOpenInMobile = computed(
    () => !this.appService.isDesktop() && this.sidebarService.isOpen()
  );

  @HostListener('window:resize')
  onResize() {
    this.appService.updateViewport();
    this.sidebarService.isOpen.set(false);
  }
}
