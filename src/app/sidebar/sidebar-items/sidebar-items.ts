import { Component } from "@angular/core";
import { SidebarItem } from "@app/sidebar/sidebar-item/sidebar-item";
import { SidebarItem as SidebarItemInterface } from "@app/sidebar/sidebar-item/sidebar-item.model";
import { SIDEBAR_ITEMS } from "@app/sidebar/sidebar-items/sidebar-items-config";

@Component({
  selector: 'sidebar-items',
  templateUrl: './sidebar-items.html',
  imports: [SidebarItem]
})
export class SidebarItems {
  navItems: SidebarItemInterface[] = SIDEBAR_ITEMS;
}