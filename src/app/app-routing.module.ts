import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'about', component: AboutComponent
  },

  {
    path: 'contact', component: ContactComponent
  },
  {
    path: '**', component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
