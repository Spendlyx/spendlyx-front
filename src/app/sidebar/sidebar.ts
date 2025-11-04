import { Component } from '@angular/core';
import { SidebarItems } from '@app/sidebar/sidebar-items/sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [SidebarItems],
})
export class Sidebar {}
