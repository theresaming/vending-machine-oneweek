#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  Serial.begin(9600);
  myservo.attach(2);  // attaches the servo on pin 1 to the servo object
  Serial.write('1');
}

void loop() {
  if (Serial.available() > 0) {
//    byte b = Serial.read();
    myservo.write(40);
    delay(500);
    myservo.write(94);
    delay(500);
    Serial.write('0');
  }
  
}

