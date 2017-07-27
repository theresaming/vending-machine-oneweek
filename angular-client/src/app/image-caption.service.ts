import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImageCaptionService {
	private imageUrl = 'http://localhost:5000/api/survey';  // URL to web api

	private images = [{"image": "file0001116000079.jpg", "caption": "a plane in the rain"}, {"image": "file0001141038889.jpg", "caption": "a close up of rain"}, {"image": "file0001176452626.jpg", "caption": "a view of a large body of water with a mountain in the background"}, {"image": "file0001209214386.jpg", "caption": "a woman wearing a hat"}, {"image": "file0001224117612.jpg", "caption": "a close up of a woman with red hair looking at the camera"}, {"image": "file0001316404158.jpg", "caption": "a clock sitting in the middle of a watch"}, {"image": "file000132701536.jpg", "caption": "a bridge over a body of water"}, {"image": "file0001376718168.jpg", "caption": "a sandy beach next to the ocean"}, {"image": "file0001454659375.jpg", "caption": "clouds in a blue sky"}, {"image": "file0001565782100.jpg", "caption": "a golf ball on a green field"}, {"image": "file0001601969844.jpg", "caption": "a flock of birds sitting on top of a lake"}, {"image": "file0001608482449.jpg", "caption": "a typewriter on a table"}, {"image": "file0001625591306.jpg", "caption": "a tree in a forest"}, {"image": "file0001637922945.jpg", "caption": "a group of clouds in the sky"}, {"image": "file0001706961259.jpg", "caption": "a man sitting on a table"}, {"image": "file0001735386118.jpg", "caption": "a clock that is on fire"}, {"image": "file0001750264747.jpg", "caption": "a close up of person"}, {"image": "file0001792779106.jpg", "caption": "a group of metal objects on a wooden surface"}, {"image": "file0001817248786.jpg", "caption": "a close up of a brush"}, {"image": "file0001896291699.jpg", "caption": "a view of a city at night"}, {"image": "file0001958769599.jpg", "caption": "a white plate"}, {"image": "file0001966720664.jpg", "caption": "a group of clouds in the sand on a beach"}, {"image": "file0001971407787.jpg", "caption": "a cup of coffee on a table"}, {"image": "file0002056219390.jpg", "caption": "a group of red fruit"}, {"image": "file0002063905655.jpg", "caption": "a close up of a football ball"}, {"image": "file0002073981867.jpg", "caption": "a skyscraper in a city"}, {"image": "file0002081215668.jpg", "caption": "a woman wearing a black dress"}, {"image": "file000267804564.jpg", "caption": "fireworks in the sky"}, {"image": "file000325161223.jpg", "caption": "clouds in the sky at sunset"}, {"image": "file000477760838.jpg", "caption": "a close up of a lush green field"}, {"image": "file00053809264.jpg", "caption": "a large waterfall in a forest"}, {"image": "file000541344089.jpg", "caption": "a clock that is on a bicycle"}, {"image": "file000555007525.jpg", "caption": "a close up of a rock"}, {"image": "file000615586116.jpg", "caption": "a close up of a woman with red hair looking at the camera"}, {"image": "file000693070568.jpg", "caption": "a pile of stuffed animals"}, {"image": "file000698862236.jpg", "caption": "a close up of a clock"}, {"image": "file000738769552.jpg", "caption": "a close up of a green leaf"}, {"image": "file000741141463.jpg", "caption": "a group of clouds in the sky with smoke coming out of it"}, {"image": "file000844922903.jpg", "caption": "a view of a city at night"}, {"image": "file000855094214.jpg", "caption": "a close up of a logo"}, {"image": "file1561246251481.jpg", "caption": "a piano keyboard"}, {"image": "file1821253941895.jpg", "caption": "a group of clouds in the sky"}, {"image": "file2231273355591.jpg", "caption": "an orange sunset in the background"}, {"image": "file2961342149502.jpg", "caption": "a close up of a light"}, {"image": "file3181278525287.jpg", "caption": "a sign above a door"}, {"image": "file3251255366828.jpg", "caption": "a close up of a woman"}, {"image": "file3811267338835.jpg", "caption": "a large body of water with a city in the background"}, {"image": "file4811312660912.jpg", "caption": "a sign on the side of a road"}, {"image": "file4821300966298.jpg", "caption": "a woman wearing sunglasses posing for the camera"}, {"image": "file5001258630705.jpg", "caption": "a view of a city"}, {"image": "file5391259700152.jpg", "caption": "a close up of a blur"}, {"image": "file5861288554715.jpg", "caption": "a tree in a forest"}, {"image": "file7561294493011.jpg", "caption": "a close up of an animal"}, {"image": "file7681334413913.jpg", "caption": "a close up of a light pole"}, {"image": "file801263247199.jpg", "caption": "a close up of a green field"}, {"image": "file8081258144701.jpg", "caption": "a close up of smoke in the dark"}, {"image": "file9221293737060.jpg", "caption": "a close up of a logo"}, {"image": "file991289430233.jpg", "caption": "a view of a grassy hill with clouds in the sky"}, {"image": "IGP2768W.jpg", "caption": "a close up of a plant"}, {"image": "IMG_1533.jpg", "caption": "a hand holding a guitar"}];
	constructor(private http: Http) { }

	getRandomImage(): Promise<any> {
		// return this.http.get(this.imageUrl, {headers: {
		// 	'Access-Control-Allow-Origin': 
		// }}).toPromise()
		// 	.then(
		// 		response => { return response.json(); }
		// 	);
		var base = 'http://localhost:5000/static/assets/images/'
		var img = this.images[Math.floor(Math.random() * this.images.length)];
		return new Promise(resolve => {
			setTimeout(() => {
			resolve({
				path: base + img.image,
				caption: img.caption
			})
			}, 10);
		});

		// return new Promise(resolve => {
		// 	var a = Math.random();
		// 	var img;
		// 	if (a < 0.3) {
		// 		img = {
		// 			src: "https://staticdelivery.nexusmods.com/mods/110/images/thumbnails/74627-0-1459502036.jpg",
		// 			caption: "what the heck is this"
		// 		}
		// 	} else if (a < 0.6) {
		// 		img = {
		// 			src: "http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg",
		// 			caption: "I like this image"
		// 		}
		// 	} else {
		// 		img = {
		// 			src: "https://ichef.bbci.co.uk/news/660/cpsprodpb/115CA/production/_90741117_0bebad60-b644-409a-83cb-5cd96a539a4c.jpg",
		// 			caption: "this is really dumb looking"
		// 		}
		// 	}
		// 	resolve(img);
		// })
	}

	sendRating(img: any): Promise<any> {
		console.log("posting a rating!", img);
		// return new Promise(resolve => {
		// 	setTimeout(() => resolve("done!"), 1);
		// });
		return this.http.post('/api/rating', {
			imageName: img.src,
			caption: img.caption,
			rating: img.rating
		}).toPromise();
	} 

	sendVend(): Promise<any> {
		return this.http.post('/api/vend', {
			type: "not implemented"
		}).toPromise();
	}
}