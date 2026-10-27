import { Component } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';

@Component ({
    selector: 'menu-nav',
    standalone: false,
    templateUrl: './menu.html',
    // styleUrls: [
    //     '',
    // ]
})

export class Menu {
    constructor() {
        
    }
    
    // constructor(_activeRoute: ActivatedRoute) {
        
    // }

    // ngOnInit() {
    //     this._activeRoute.params.subscribe((parms: Params) => {
    //         // AQUI SE OBTIENEN LOS PARAMETROS MANDADOS POR :name
    //     })
    // }
}