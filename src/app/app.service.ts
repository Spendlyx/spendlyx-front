import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  private readonly MOBILE_BREAKPOINT = 768;
  readonly isDesktop = signal(window.innerWidth >= this.MOBILE_BREAKPOINT);

  updateViewport() {
    this.isDesktop.set(window.innerWidth >= this.MOBILE_BREAKPOINT);
  }
}
