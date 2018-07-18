import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ImageCaptionService } from './image-caption.service';

declare var jQuery: any;

@Component({
  selector: 'image-rating',
  templateUrl: './templates/image-rating.component.html',
  styleUrls: ['css/screen.css', 'css/image-area.component.css']
})
export class ImageRatingComponent implements OnInit {
  private imageUrl: string = "";
  private caption: string = "";
  private starsHighlighted: number = 0;

  private imagesRated: number = 0;
  public loadingImage = false;
  public firstLoad = false;

  @Output() onRated = new EventEmitter<number>();

  constructor(
        private imageService: ImageCaptionService,
        ) {
  }


  ngOnInit(): void {
    this.loadingImage = true;
    this.getImage();

    console.log('init!');
    var that = this;
    jQuery('img.svg').each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        $svg.attr('width', '80px');
        $svg.attr('height', '80px');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');
    });

    jQuery('.ratingarea .star').mouseenter(function(event){
      // console.log(event);
      // console.log(num);
      var num = parseInt(jQuery(event.currentTarget).attr('id').substring(3));
      jQuery('.ratingarea .star').each(function(index, el) {
        if (index < num) {
          jQuery(el).addClass('highlight');
          jQuery('path', el).css('fill', '#F1C21C');
        } else {
          jQuery(el).removeClass('highlight');
          jQuery('path', el).css('fill', '');
        }
      })
    }),
    jQuery('.ratingarea .star').mouseleave(function(event){
      // console.log(event);
      // console.log(num);
      var num = parseInt(jQuery(event.currentTarget).attr('id').substring(3));
      jQuery('.ratingarea .star').removeClass('highlight');
      jQuery('.ratingarea path').css('fill', '');

    })
  }

  starClick(num) {
    console.log("doing click event!");
    this.imageService.sendRating({
      src: this.imageUrl,
      rating: num,
      caption: this.caption
    });
    console.log("rated!");
    this.loadingImage = true;
    this.onRated.emit(num);
    this.imagesRated++;
    if (this.imagesRated < 2) {
      this.getImage();
    }
  }

  public getStars(): Array<number> {
    var arr = [];
    for (let i = 1; i <= 5; i++) {
      arr.push({
        num: i,
        highlighted: i <= this.starsHighlighted,
        backgroundColor: i <= this.starsHighlighted ? '#F1C21C' : ''
      });
    }
    return arr;
  }

  public setStars(stars: number): void {
    console.log("set stars!", stars);
    this.starsHighlighted = stars;
  }

  public setStarsZero(): void {
    console.log("set stars to zero!");
    this.setStars(0);
  }

  public sendRating(star: number): void {
    console.log("rating is", star);
  }

  public getImage(): void {
    this.imageService.getRandomImage().then((img) => {
      console.log(img);
      this.imageUrl = img.path;
      this.caption = img.caption;
    });
  }

  imageLoad() {
    this.loadingImage = false;
    this.firstLoad = true;
    jQuery('.ratingarea .star').removeClass('highlight');
    jQuery('.ratingarea path').css('fill', '');
    jQuery('.caption').css('max-width', jQuery('.image-wrap img').css('width'));
  }
}
