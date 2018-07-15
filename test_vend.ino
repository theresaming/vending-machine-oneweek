#include <Servo.h>


Servo box_servo;
Servo wheel_servo;

const int BOX_SERVO = 2;
const char BOX_IR = A0; 

const int WHEEL_SERVO = 3;
const char WHEEL_IR = A1;

const int CONVEYOR_MOTOR = 9;



double box_baseline;
double wheel_baseline;

void setup() {
 
  Serial.begin(9600);
  box_servo.attach(BOX_SERVO);
  wheel_servo.attach(WHEEL_SERVO);
  box_servo.write(94);
  wheel_servo.write(94);
  pinMode(BOX_IR, INPUT);
  pinMode(WHEEL_IR, INPUT);
  

 
  //box_setup(); 
  wheel_setup();
  


  //wheel_ir_baseline();
}

void box_setup() {
  box_ir_baseline();
}

void box_ir_baseline() {
  int sum = 0;
  for (int i  = 0; i < 200; i++) {
    int val = analogRead(BOX_IR); //box ir sensor
    Serial.println(val);
    sum = sum + val;
    delay(100);
  }
  box_baseline = sum / 100.0; 
  Serial.println("Box IR done calibrating");
}

void wheel_setup() {
  int sum = 0;
  for (int i  = 0; i < 200; i++) {
    int val = analogRead(WHEEL_IR); 
    Serial.println(val);
    sum = sum + val;
    delay(100);
  }
  wheel_baseline = sum / 100.0; 
  Serial.println("Wheel IR done calibrating");
}


void loop() {
  wheel();
  //box();
  delay(2000);
}

void wheel() {
  wheel_servo.write(98);
  delay(800);
  
  int revolutions = 0; 
  while(true) {
    int val = analogRead(WHEEL_IR);
    Serial.println(val);
    if (val > wheel_baseline + 200) {
      revolutions = revolutions + 1; 
      if (revolutions == 2) {
        wheel_servo.write(94);
        break;
      } else {
        delay(700);
      }
    }
  }
}

void box() {
  box_servo.write(80);
  delay(400);
  
  while(true) {
    int val = analogRead(BOX_IR); //box ir sensor
    Serial.println(val);
    if (val > box_baseline + 300) {
      box_servo.write(94);
      break;
    }
    delay(50);
  }
}

