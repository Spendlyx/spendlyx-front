import { Component, signal } from '@angular/core';
import { SidebarItems } from '@app/sidebar/sidebar-items/sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [SidebarItems],
})
export class Sidebar {
  protected readonly isSidebarOpen = signal(false);

  toggleSidebar() {
    this.isSidebarOpen.update(v => !v);
  }
}
