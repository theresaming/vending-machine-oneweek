#include <Servo.h>
#include <Adafruit_NeoPixel.h>


Servo box_servo;
Servo wheel_servo;
Servo coil_servo; 

const int BOX_SERVO = 2;
const char BOX_IR = A0; 

const int WHEEL_SERVO = 3;
const char WHEEL_IR = A1;

const int COIL_SERVO = 4;

const int CONVEYOR_MOTOR = 9;
const int CONVEYOR_IR = 8;

const int LIGHTS = 7;
const int NUM_LIGHTS = 22; 
Adafruit_NeoPixel light_strip = Adafruit_NeoPixel(NUM_LIGHTS, LIGHTS, NEO_GRB + NEO_KHZ800);

double box_baseline;
double wheel_baseline;

void setup() {
  Serial.begin(9600);
  Serial.println("Arduino listening ..."); // send to python
  box_servo.attach(BOX_SERVO);
  wheel_servo.attach(WHEEL_SERVO);
  coil_servo.attach(COIL_SERVO);

  // sets to zero speed
  box_servo.write(94);
  wheel_servo.write(94);
  coil_servo.write(94);
  
  pinMode(BOX_IR, INPUT);
  pinMode(WHEEL_IR, INPUT);

  pinMode(CONVEYOR_MOTOR, OUTPUT);
  pinMode(CONVEYOR_IR, INPUT);

  light_strip.begin();

  
  lights();
  

 
}

void box_setup() {
  Serial.println("Box setup starting");
  int sum = 0;
  for (int i  = 0; i < 200; i++) {
    int val = analogRead(BOX_IR); //box ir sensor
    Serial.println(val);
    sum = sum + val;
    delay(100);
  }
  box_baseline = sum / 200.0; 
  Serial.println("Box IR done calibrating");
}

void wheel_setup() {
  Serial.println("Wheel setup starting");
  int sum = 0;
  for (int i  = 0; i < 200; i++) {
    int val = analogRead(WHEEL_IR); 
    Serial.println(val);
    sum = sum + val;
    delay(100);
  }
  wheel_baseline = sum / 200.0; 
  Serial.println("Wheel IR done calibrating");
}

void conveyor_setup() {
  /*conveyor setup 'assumes' you're at the end and need to go all the way back around
   * and thus just calls conveyor.
   * if not, call conveyor setup until you're all the way back around. 
   * */
  conveyor(); 
}


void loop() {
  //wheel();
  //box();
  //coil();
  //delay(2000);

  if (Serial.available() > 0) {
    char data = Serial.read(); 
    Serial.print(data);
    if (data == '1') {
      Serial.print("box_setup()");
      box_setup();
    } else if (data == '2') {
      Serial.print("wheel_setup()");
      wheel_setup();
    } else if (data == '3') {
      Serial.print("conveyor_setup()");
      conveyor_setup();
    } else if (data == '4') {
      Serial.print("box()");
      box();
    } else if (data == '5') {
      Serial.print("wheel()");
      wheel();
    } else if (data == '6') {
      Serial.print("coil()");
      coil(); 
    } else if (data == '7') {
      Serial.print("conveyor()");
      conveyor();
    }
  }
  delay(10);
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

void coil() {
  coil_servo.write(110);
  delay(2000);
  coil_servo.write(94);
}

void conveyor() {
  digitalWrite(CONVEYOR_MOTOR, HIGH);
  delay(400);
  while(true) {
    int val = digitalRead(CONVEYOR_IR); 
    Serial.println(val);
    if (!val) {
      break;
    }
    delay(10);
  }
  
 digitalWrite(CONVEYOR_MOTOR, LOW); 
}

void lights() {
  for (int i = 0; i < NUM_LIGHTS; i++) {
    light_strip.setPixelColor(i, light_strip.Color(255, 255, 255));
  }
  light_strip.show();
}

