#include <Servo.h>
#include <Adafruit_NeoPixel.h>

Servo servo1;

const int SERVO_PIN = 2;
const int ZERO = 94;

const int NEOPIXELS_PIN1 = 10; 
const int NEOPIXELS_PIN2 = 13; 
const int NUM_NEOPIXELS_EACH_STRIP = 11;
Adafruit_NeoPixel left_strip = Adafruit_NeoPixel(NUM_NEOPIXELS_EACH_STRIP, NEOPIXELS_PIN1, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel right_strip = Adafruit_NeoPixel(NUM_NEOPIXELS_EACH_STRIP, NEOPIXELS_PIN2, NEO_GRB + NEO_KHZ800); 


int numCycles;

void setup() {
  Serial.begin(9600);
  Serial.write('1');
  
  servo1.attach(SERVO_PIN); 
  servo1.write(ZERO); 

  
  left_strip.begin();
  right_strip.begin();

  numCycles = 0;

}

void loop() {
  int input = -1;
  if (Serial.available() > 0) {
    input = Serial.read();
     vendLightSequence(); 
     servoEnable();
    Serial.write('0');
  } else {
    if (numCycles == 10) {
      numCycles = 0;
      changeToRandomColor();
    } else {
      numCycles++;
    }
  } 
  delay(100);
 
}

void servoEnable() {
   servo1.write(130);
    delay(1500);
    servo1.write(ZERO);
}

void changeToRandomColor() {
  int red = random(0, 256);
  int green = random(0, 256);
  int blue = random(0, 256);
  
  for(uint16_t i=0; i<left_strip.numPixels(); i++) {
      left_strip.setPixelColor(i  , left_strip.Color(red, green, blue)); // Draw new pixel
      right_strip.setPixelColor(i  , right_strip.Color(red, green, blue)); // Draw new pixel
  }
  left_strip.show();
  right_strip.show(); 
}

void vendLightSequence() {
   for(uint16_t i=0; i<left_strip.numPixels()+4; i++) {
      left_strip.setPixelColor(i  , 0, 0, 255); // Draw new pixel
      left_strip.setPixelColor(i-4, 0); // Erase pixel a few steps back
      left_strip.show();
      right_strip.setPixelColor(i  , 0, 0, 255); // Draw new pixel
      right_strip.setPixelColor(i-4, 0); // Erase pixel a few steps back
      right_strip.show();
      delay(70);
  }

     for(uint16_t i=0; i<left_strip.numPixels()+4; i++) {
      left_strip.setPixelColor(i  , 255, 0, 0); // Draw new pixel
      left_strip.setPixelColor(i-4, 0); // Erase pixel a few steps back
      left_strip.show();
      right_strip.setPixelColor(i  , 255, 0, 0); // Draw new pixel
      right_strip.setPixelColor(i-4, 0); // Erase pixel a few steps back
      right_strip.show();
      delay(70);
  }

     for(uint16_t i=0; i<left_strip.numPixels()+4; i++) {
      left_strip.setPixelColor(i  , 0, 255, 0); // Draw new pixel
      left_strip.setPixelColor(i-4, 0); // Erase pixel a few steps back
      left_strip.show();
      right_strip.setPixelColor(i  , 0, 255, 0); // Draw new pixel
      right_strip.setPixelColor(i-4, 0); // Erase pixel a few steps back
      right_strip.show();
      delay(70);
  }

  for(uint16_t i=0; i<left_strip.numPixels(); i++) {
      left_strip.setPixelColor(i  , 255, 255, 255); // Draw new pixel
      right_strip.setPixelColor(i  , 255, 255, 255); // Draw new pixel      
  }

  left_strip.show();
  right_strip.show();
}

