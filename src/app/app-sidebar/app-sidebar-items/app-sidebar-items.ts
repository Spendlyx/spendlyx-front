import { Component } from "@angular/core";
import { AppSidebarItem } from "@app/app-sidebar/app-sidebar-item/app-sidebar-item";
import { SidebarItem } from "@app/app-sidebar/app-sidebar-item/app-sidebar-item.model";
import { SIDEBAR_ITEMS } from "@app/app-sidebar/app-sidebar-items/app-sidebar-items.config";

@Component({
  selector: 'app-sidebar-items',
  templateUrl: './app-sidebar-items.html',
  imports: [AppSidebarItem]
})
export class AppSidebarItems {
  navItems: SidebarItem[] = SIDEBAR_ITEMS;
}