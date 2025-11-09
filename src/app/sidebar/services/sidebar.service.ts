import { HostListener, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {

  private readonly MOBILE_BREAKPOINT = 768;

  readonly isOpen = signal(window.innerWidth >= this.MOBILE_BREAKPOINT);

  toggle() {
    this.isOpen.set(!this.isOpen());
  }

  @HostListener('window:resize')
  onResize() {
    const isDesktop = window.innerWidth >= this.MOBILE_BREAKPOINT;
    this.isOpen.set(isDesktop);
  }
}