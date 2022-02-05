import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Photo} from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input()
  photos: Photo[];

  rows: Array<Photo[]> = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) {
      this.rows = this.generateRows(this.photos);
    }
  }

  generateRows(photos: Photo[]) {
    const newRows = [];
    for (let i=0; i < this.photos.length; i += 3) {
      newRows.push(this.photos.slice(i, i+3));
    }
    console.log(newRows);
    return newRows;
  }

}
