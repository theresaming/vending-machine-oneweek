import { Injectable } from '@angular/core';

@Injectable()
export class ImageCaptionService {
	getRandomImage(): Promise<any> {
		return new Promise(resolve => {
			var a = Math.random();
			var img;
			if (a < 0.3) {
				img = {
					src: "https://staticdelivery.nexusmods.com/mods/110/images/thumbnails/74627-0-1459502036.jpg",
					caption: "what the heck is this"
				}
			} else if (a < 0.6) {
				img = {
					src: "http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg",
					caption: "I like this image"
				}
			} else {
				img = {
					src: "https://ichef.bbci.co.uk/news/660/cpsprodpb/115CA/production/_90741117_0bebad60-b644-409a-83cb-5cd96a539a4c.jpg",
					caption: "this is really dumb looking"
				}
			}
			resolve(img);
		})
	}

	sendRating(img: any): Promise<any> {
		console.log("posting a rating!", img);
		return new Promise(resolve => {
			setTimeout(() => resolve("done!"), 1);
		});
	} 
}