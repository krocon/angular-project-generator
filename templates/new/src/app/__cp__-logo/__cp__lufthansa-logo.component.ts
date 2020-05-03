import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';

/**
 * https://de.wikipedia.org/wiki/Datei:Deutsche_Bahn_AG-Logo.svg
 * https://de.wikipedia.org/wiki/Deutsche_Bahn
 */
@Component({
  selector: 'app-__cp__-logo',
  template: `
    <svg
      [attr.height]="_height"
      [attr.width]="_width"
      viewBox="0 0 192.756 192.756">
      <g fill-rule="evenodd" clip-rule="evenodd">
        <path
          class="logo-path-fill-02"
          d="M0 0h192.756v192.756H0V0z"/>
        <path
          class="logo-path-fill-02"
          d="M0 0h192.756v192.756H0V0z"/>
        <path
          class="logo-path-fill-01"
          d="M96.377 5.379c50.009 0 90.966 41.021 90.966 91.031 0 49.945-40.957 90.967-90.966 90.967-50.009 0-90.966-40.957-90.966-90.967 0-50.009 40.958-91.031 90.966-91.031z"/>
        <path
          class="logo-path-fill-02"
          d="M96.314 10.644c-24.074 0-47.506 10.464-63.684 28.375-14.059 15.6-21.955 36.271-21.955 57.328 0 24.074 10.4 47.506 28.311 63.619 15.664 14.123 36.335 22.02 57.328 22.02 24.073 0 47.504-10.4 63.618-28.311 14.125-15.664 22.021-36.336 22.021-57.328 0-24.138-10.4-47.57-28.311-63.683-15.665-14.06-36.271-22.02-57.328-22.02z"
          />
        <path
          class="logo-path-fill-01"
          d="M17.544 72.915l1.99-3.531 10.271 5.2 2.247-3.916 39.609 22.34-1.027 1.862-23.046-11.235c8.859 7.896 19.773 16.306 32.227 16.306 14.379 0 25.935-11.363 32.226-23.368 3.275-.257 6.549-.514 9.887-.514 16.756 0 34.152 3.273 50.268 7.96l5.52 1.605 1.477.386-4.814 4.172c-14.316-4.108-29.08-7.318-43.975-8.217l-1.67 2.375c12.135.834 24.268 2.953 36.016 6.034l4.172 1.092 3.018.77-4.814 4.108c-13.803-3.723-28.119-6.355-42.498-6.419l-1.477 1.862c14.188.513 27.99 3.081 41.791 6.356l-4.494 3.787c-13.609-2.826-27.283-4.559-41.213-4.752l-1.412 1.926h2.76c11.363 0 22.854 1.67 33.961 3.98l3.723.836-4.688 3.916c-8.344-1.605-16.818-2.633-25.357-2.633-11.17 0-22.66 2.055-32.804 6.869 12.069 13.354 28.696 24.459 47.313 24.459h.191l-6.033 6.805c-22.598-6.869-43.398-18.295-62.656-31.842-10.593-7.447-20.415-16.048-31.072-23.431-7.383-5.072-14.894-9.694-22.854-13.738l-2.763-1.41z"/>
      </g>
    </svg>
  `,
  styles:[`
    .logo-path-fill-01 {
      fill: #FF9E1C;
      fill-rule: evenodd;
    }
    .logo-path-fill-02 {
      fill: #fff;
    }
  `]
})
export class __capcp__LufthansaLogoComponent implements AfterViewInit {

  @Input()
  set height(value: number) {
    this._height = value;
  }

  _height = 40;
  _width = this._height;

  constructor(
    private readonly cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}
