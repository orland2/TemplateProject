// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authUrl: 'http://www12.chilena.cl/Corporate/Web/VidaIndividual/QA/ApiSuscripcionVI/token',
  sauUrl: 'http://www12.chilena.cl/corporate/web/sau/Login/Manager.aspx?aplicacionid=199',
  usuarioUrl: 'http://www12.chilena.cl/Corporate/Web/VidaIndividual/QA/ApiSuscripcionVI/api/usuarios',
  userIdleSeconds: 1800,
  userIdleTimeoutSeconds: 30,
  numeroTelefono: '600 600 9090',
  numeroMesaCentral: '+56 222 007 000',
  ubicacionSucursal: 'Av. Apoquindo 5550. Las Condes, Santiago, Chile'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
