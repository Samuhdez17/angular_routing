import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  standalone: false,
  styleUrl: './numero-doble.css',
  templateUrl: './numero-doble.html',
})

export class NumeroDoble implements OnInit {
  numero!: number
  doble!: number

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
  ) {
    this.doble = 0
  }

  ngOnInit() {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['numero'] != null) {
        this.numero = parseInt(params['numero'])
        this.doble = this.numero * 2
        this._cdr.detectChanges()
      }
    })
  }

  goHome() {
    this._router.navigate(['/'])
  }

  redirect(numero: number) {
    this._router.navigate(['/doble', numero])
  }
}
