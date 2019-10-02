import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import swal from 'sweetalert2';
import { Globals } from '../../models/globals';
import { UserIdleService } from 'angular-user-idle';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  width: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktopDevice: boolean;
  aparece: boolean;
  rutaIconos: string;
  comenzo: string;

  constructor(
    public globals: Globals,
    private userIdle: UserIdleService,
    private deviceService: DeviceDetectorService
  ) {
  }

  ngOnInit() {

    if (localStorage.getItem('sesionExiste') == '0') {
      this.userIdle.setConfigValues({ idle: environment.userIdleSeconds, timeout: 1, ping: 0 });
      this.userIdle.startWatching();

      this.userIdle.onTimerStart().subscribe(count => {
        console.log('Sesión expirada');
      });

      localStorage.setItem("sesionExiste", '1');

      this.userIdle.onTimeout().subscribe(() => {
        let timerInterval: any;
        swal.fire({
          title: 'Su sesión ha expirado!',
          html: 'La aplicación se cerrará en <strong></strong> segundos.',
          timer: environment.userIdleTimeoutSeconds * 1000,
          onBeforeOpen: () => {
            swal.showLoading();
            timerInterval = setInterval(() => {
              swal.getContent().querySelector('strong').textContent = Math.round(swal.getTimerLeft() / 1000).toString();
            }, 100);
          },
          onClose: () => {
            clearInterval(timerInterval);
            this.userIdle.resetTimer();
          }
        }).then((result) => {
          if (result.dismiss === swal.DismissReason.timer) {
            swal.fire({ title: 'Su sesión ha finalizado' })
              .then((value) => {
                this.logout();
              });
          }
        });
      });
    }
    
    this.epicFunction();
  }

  epicFunction() {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
  }

  onResize(event) {
    this.width = event.target.innerWidth;
    if (this.width <= 1000) {
      this.isMobile = true;
      this.isTablet = true;
      this.isDesktopDevice = false;
    } else {
      this.isMobile = false;
      this.isTablet = false;
      this.isDesktopDevice = true;
    }
  }

  logout() {
    sessionStorage.removeItem('auth');
    window.location.replace(environment.sauUrl);
  }

}