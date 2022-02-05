import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {PhotoFormComponent} from './photos/photo-form/photo-form.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {PhotosResolver} from './photos/photo-list/photos.resolver';


const routes: Routes = [
  {
    path: 'user/:userName/photos',
    component: PhotoListComponent,
    resolve: {
      photos: PhotosResolver
    }
  },
  {path: 'p/user/add', component: PhotoFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

// 04:
// BrowserModule vs CommonModule
// Single Page Application e rotas no lado do navegador
//   O módulo RouterModule
// A diretiva router-outlet como grande lacuna para exibição de outros componentes
// Módulo de rotas e definição de rotas
// Como lidar com páginas 404
// Parametrizando rotas e como obter valores do segmento parametrizado
