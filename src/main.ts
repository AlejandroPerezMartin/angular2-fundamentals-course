import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App, providers, routes } from './app'
import { Main, Notes, About, Auth } from './app/containers'
import {
    AppBar,
    NoteCard,
    NoteCreator,
    ColorPicker
} from './app/ui'

@NgModule({
  declarations: [
      App,
      Main,
      AppBar,
      Notes,
      NoteCard,
      NoteCreator,
      ColorPicker,
      About,
      Auth
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routes
  ],
  providers,
  bootstrap: [App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
