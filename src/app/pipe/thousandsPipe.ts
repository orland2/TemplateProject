import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
        name: 'thousandsPipe'
    })

export class ThousandsPipe implements PipeTransform {

    public transform(value: any) {
        if (value != undefined ) {
            return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 2 }).format(value);
        }
        else{
            return 0;
        }
    }
}