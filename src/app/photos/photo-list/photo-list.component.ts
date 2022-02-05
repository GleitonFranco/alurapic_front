import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotoService} from '../photo.service';
import {ActivatedRoute} from '@angular/router';
import {Photo} from '../photo/photo';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  userName= '';
  filter = '';
  currentPage = 1;
  hasMore = true;

  constructor(private service: PhotoService,
              private actRoute: ActivatedRoute
              ) {}

  ngOnInit(): void {
    this.userName = this.actRoute.snapshot.params.userName;
    this.photos = this.actRoute.snapshot.data.photos;
  }

  load() {
    this.service.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos);
      this.hasMore = !!photos.length;
    });
  }

}
