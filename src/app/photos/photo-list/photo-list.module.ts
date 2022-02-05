import {NgModule} from '@angular/core';
import {PhotoListComponent} from './photo-list.component';
import {PhotosComponent} from './photos/photos.component';
import {CommonModule} from '@angular/common';
import {LoadButtonComponent} from './load-button/load-button.component';
import {FiltrarPhotosPipe} from './filtrar-photos.pipe';
import {PhotoModule} from '../photo/photo.module';
import {CardModule} from '../../shared/card/card.module';
import { SearchComponent } from './search/search.component';
import {DarkenOnHoverModule} from '../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FiltrarPhotosPipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule
  ]
})
export class PhotoListModule {}
