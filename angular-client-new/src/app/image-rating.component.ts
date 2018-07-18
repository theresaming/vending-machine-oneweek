import { Component, OnInit, EventEmitter, Output, Injectable } from '@angular/core';
import { ImageCaptionService } from './image-caption.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'image-rating',
  templateUrl: './templates/image-rating.component.html',
  styleUrls: ['css/screen.css', 'css/image-area.component.css'],
})

@Injectable()
export class ImageRatingComponent implements OnInit {
  constructor(
    private imageService: ImageCaptionService,
    ) {
  }

  private imageUrl = '';
  private caption = '';
  private starsHighlighted = 0;
  private category = 'Adidas';
  private numImages = 5;
  private imagesSelected: Array<number> = [this.numImages];
  private imagesRated = 0;
  public loadingImage = false;
  public firstLoad = false;
  private numCategoriesCompleted = 0;

  @Output() onRated = new EventEmitter<number>();

  ngOnInit(): void {
    this.loadingImage = true;

    console.log('init!');

    // jQuery('.ratingarea .star').mouseenter(function(event){
    //   // console.log(event);
    //   // console.log(num);
    //   var num = parseInt(jQuery(event.currentTarget).attr('id').substring(3));
    //   jQuery('.ratingarea .star').each(function(index, el) {
    //     if (index < num) {
    //       jQuery(el).addClass('highlight');
    //       jQuery('path', el).css('fill', '#F1C21C');
    //     } else {
    //       jQuery(el).removeClass('highlight');
    //       jQuery('path', el).css('fill', '');
    //     }
    //   })
    // }),
    // jQuery('.ratingarea .star').mouseleave(function(event){
    //   // console.log(event);
    //   // console.log(num);
    //   var num = parseInt(jQuery(event.currentTarget).attr('id').substring(3));
    //   jQuery('.ratingarea .star').removeClass('highlight');
    //   jQuery('.ratingarea path').css('fill', '');

    // })
  }

  imageClick(num) {
    // console.log("clicking image " + num);
    const color = jQuery('#img' + num).css('border-color');
    // console.log(n);
    if (color.replace(/\D+/g, '') === '0000') {
      // activate
      jQuery('#img' + num).css('border-color', '#f1c21c');
      jQuery('#img' + num).addClass('activated');
    } else {
      // deactivate
      jQuery('#img' + num).css('border-color', 'rgba(0,0,0,0)');
      jQuery('#img' + num).removeClass('activated');

    }
  }

  verify(): Array<number> {
    const arr = new Array(this.numImages).fill(0);

    console.log('clicked verify');
    for (let i = 1; i <= this.numImages; i++) {
      const indexOfActivated = jQuery('#img' + i).attr('class').indexOf('activated');
      if (indexOfActivated !== -1) {
        arr[i - 1] = 1;
      }
      this.numCategoriesCompleted += 1;
    }
    return arr;
  }

  skip() {
    console.log('clicked skip');
  }

  showInfo() {
    console.log('clicked info');
  }

  // public getImages(): Array<number> {
  //   const arr = [];
  //   for (let i = 0; i <= 6; i++) {
  //     arr.push({
  //       num: i,
  //       highlighted: i <= this.starsHighlighted,
  //       backgroundColor: i <= this.starsHighlighted ? '#F1C21C' : ''
  //     });
  //   }
  //   return arr;
  // }

  // starClick(num) {
  //   console.log('doing click event!');
  //   // this.imageService.sendRating({
  //   //   src: this.imageUrl,
  //   //   rating: num,
  //   //   caption: this.caption
  //   // });
  //   console.log("rated!");
  //   this.loadingImage = true;
  //   this.onRated.emit(num);
  //   this.imagesRated++;
  //   if (this.imagesRated < 2) {
  //     this.getImage();
  //   }
  // }

  // public setStars(stars: number): void {
  //   console.log("set stars!", stars);
  //   this.starsHighlighted = stars;
  // }

  // public setStarsZero(): void {
  //   console.log("set stars to zero!");
  //   this.setStars(0);
  // }

  // public sendRating(star: number): void {
  //   console.log("rating is", star);
  // }

  public getNewImages(): void {
    this.imageService.getRandomImage().then((img) => {
      console.log(img);
      this.imageUrl = img.path;
      this.caption = img.caption;
    });
  }

  // imageLoad() {
  //   this.loadingImage = false;
  //   this.firstLoad = true;
  //   jQuery('.ratingarea .star').removeClass('highlight');
  //   jQuery('.ratingarea path').css('fill', '');
  //   jQuery('.caption').css('max-width', jQuery('.image-wrap img').css('width'));
  // }
}
