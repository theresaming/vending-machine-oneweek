function getRandomImage() {
  var imgAr = new array('image3258.jpeg','image3325.jpeg', 'image5919.png', 'image5924.png', 'image10154.jpeg'
  'image10158.jpeg', 'image10165.jpeg', 'image10165.jpeg', 'image10166.jpeg', 'image10167.jpeg', 'image10168.jpeg',
  'image10173.jpeg', 'image10175.jpeg', 'image10176.jpeg', 'image10177.jpeg', 'image10178.jpeg', 'image10179.jpeg', 'image10181.jpeg',
  'image10182.jpeg', 'image10183.jpeg');
    path = 'assets/images'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr =  path + img;
    var newImage=document.getElementById('random');
    neImage.setAttribute('src', imgStr); 
}
