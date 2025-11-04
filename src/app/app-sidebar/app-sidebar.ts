import { Component } from '@angular/core';
import { AppSidebarItems } from '@app/app-sidebar/app-sidebar-items/app-sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.html',
  imports: [AppSidebarItems],
})
export class AppSidebar {}
