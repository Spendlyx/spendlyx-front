import { Component, HostListener, signal } from '@angular/core';
import { SidebarItems } from '@app/sidebar/sidebar-items/sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [SidebarItems],
})
export class Sidebar {
  private readonly MOBILE_BREAKPOINT = 768;
  isSidebarOpen = signal(window.innerWidth >= this.MOBILE_BREAKPOINT);

  toggleSidebar() {
    this.isSidebarOpen.set(!this.isSidebarOpen());
  }

  @HostListener('window:resize')
  onResize() {
    const isDesktop = window.innerWidth >= this.MOBILE_BREAKPOINT;
    this.isSidebarOpen.set(isDesktop);
  }
}
