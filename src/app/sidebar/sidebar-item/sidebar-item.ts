import { Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-item.html',
})
export class SidebarItem {
  @Input() path!: string;
  @Input() label!: string;
}