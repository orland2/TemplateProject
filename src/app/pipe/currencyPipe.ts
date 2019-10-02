import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency } from '@angular/common';

    @Pipe({
        name: 'currencyPipe'
    })

export class CurrencyPipe implements PipeTransform {

    public transform(value:any): string {
        if(value){
            value = value.toString().replace(/\D*/g, '');
            value = new Intl.NumberFormat('cl-CL', { style: 'currency', currency: 'CLP' }).format(Number(value));
            value = value.replace(/,/g, ".").replace('CLP', '$');
        }
        if (value == 0) {
            value = '';
        }
        return value;  
    }
}