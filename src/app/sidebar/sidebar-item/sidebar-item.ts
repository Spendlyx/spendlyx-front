import { Component, Input } from "@angular/core";

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.html',
})
export class SidebarItem {
  @Input() path!: string;
  @Input() label!: string;
}