import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';

// import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImageCaptionService {
  private imageUrl = 'http://localhost:5000/api/survey';  // URL to web api
  // constructor(private http: Http) { }

  // getRandomImage(): Promise<any> {
  // return this.http.get(this.imageUrl, {headers: {
  //  'Access-Control-Allow-Origin':
  // }}).toPromise()
  //  .then(
  //  response => { return response.json(); }
  //  );
  // const base = 'http://localhost:5000/static/assets/images/'
  // var img = this.images[Math.floor(Math.random() * this.images.length)];
  // return new Promise(resolve => {
  // setTimeout(() => {
  // resolve({
  // path: base + img.image,
  // caption: img.caption
  // })
  // }, 10);
  // });

  // return new Promise(resolve => {
  //  var a = Math.random();
  //  var img;
  //  if (a < 0.3) {
  //  img = {
  //  src: "https://staticdelivery.nexusmods.com/mods/110/images/thumbnails/74627-0-1459502036.jpg",
  //  caption: "what the heck is this"
  //  }
  //  } else if (a < 0.6) {
  //  img = {
  //  src: "http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg",
  //  caption: "I like this image"
  //  }
  //  } else {
  //  img = {
  //  src: "https://ichef.bbci.co.uk/news/660/cpsprodpb/115CA/production/_90741117_0bebad60-b644-409a-83cb-5cd96a539a4c.jpg",
  //  caption: "this is really dumb looking"
  //  }
  //  }
  //  resolve(img);
  // })
  }

  // sendRating(img: any): Promise<any> {
  // console.log('posting a rating!', img);
  // // return new Promise(resolve => {
  // //  setTimeout(() => resolve("done!"), 1);
  // // });
  // return this.http.post('/api/rating', {
  // imageName: img.src,
  // caption: img.caption,
  // rating: img.rating
  // }).toPromise();
  // }

  // sendVend(): Promise<any> {
  // return this.http.post('/api/vend', {
  // type: 'not implemented'
  // }).toPromise();
  // }
}
