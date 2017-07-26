import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'image-rating',
  templateUrl: './templates/image-rating.component.html',
  styleUrls: ['css/screen.css', 'css/image-area.component.css']
})
export class ImageRatingComponent implements OnInit {
  public image_url: string = "https://staticdelivery.nexusmods.com/mods/110/images/thumbnails/74627-0-1459502036.jpg";
  public caption: string = "A really good caption";
  public starsHighlighted = 0;

  constructor() {
  }

  ngOnInit(): void {
    console.log('init!');
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

        $svg.attr('width', '100px');
        $svg.attr('height', '100px');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');
    });

    jQuery('.ratingarea .star').mouseenter(function(event){
      console.log(event);
      console.log(num);
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
      console.log(event);
      console.log(num);
      var num = parseInt(jQuery(event.currentTarget).attr('id').substring(3));
      jQuery('.ratingarea .star').removeClass('highlight');
      jQuery('.ratingarea path').css('fill', '');
      
    }),
    jQuery('.ratingarea .star').click(function(event){
      console.log(event);
      console.log(num);
      var num = parseInt(jQuery(event.currentTarget).attr('id').substring(3));
    });
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
}
