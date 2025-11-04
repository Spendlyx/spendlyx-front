import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './app-sidebar-item.html',
})
export class AppSidebarItem {
  @Input() path!: string;
  @Input() label!: string;
}