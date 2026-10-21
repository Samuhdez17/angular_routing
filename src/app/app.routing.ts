import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { Home } from './components/home_component/home'
import { Cine } from './components/cine_component/cine'
import { Musica } from './components/musica_component/musica'
import { NotFound } from './components/not_found_component/not_found'

const appRoutes: Routes = [
            { path:'', component: Home },
            { path:'cine', component: Cine },
            { path:'musica', component: Musica },
            { path:'**', component: NotFound }, // SIEMPRE LA ULTIMA RUTA
        ]

export const appRoutingProvider: any = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)