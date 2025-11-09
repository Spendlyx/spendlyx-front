import { Component, HostListener, Injectable, signal } from '@angular/core';
import { SidebarService } from '@app/sidebar/services/sidebar.service';
import { SidebarItems } from '@app/sidebar/sidebar-items/sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [SidebarItems],
})
export class Sidebar {

  constructor(public sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
