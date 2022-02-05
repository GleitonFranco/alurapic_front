import {Pipe, PipeTransform} from '@angular/core';
import {Photo} from '../photo/photo';

@Pipe({name: 'filtrarPhotosPorDescricao'})
export class FiltrarPhotosPipe implements PipeTransform {

  transform(photos: Photo[], descricao: string): Photo[] {
    if (descricao) {
      return photos.filter(photo => photo.description.toLocaleLowerCase().includes(descricao.toLocaleLowerCase()));
    } else {
      return photos;
    }
  }

}
