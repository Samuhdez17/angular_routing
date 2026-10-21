import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { App } from './app';
import { Cine } from './components/cine_component/cine';
import { Musica } from './components/musica_component/musica';
import { Home } from './components/home_component/home';
import { NotFound } from './components/not_found_component/not_found';
import { routing } from './app.routing';
import { Menu } from './components/menu_component/menu';

@NgModule({
  declarations: [
    App,
    Cine,
    Musica,
    Home,
    NotFound,
    Menu
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
  ],
  bootstrap: [App]
})
export class AppModule { }
