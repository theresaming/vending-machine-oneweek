
int motorPin = 9;
int sensor = 8;

void setup() {
 Serial.begin(9600);
 pinMode(motorPin, OUTPUT);
 pinMode(sensor, INPUT);
}

void loop() {
  digitalWrite(motorPin, HIGH);
  delay(400);
  while(true) {
    int val = digitalRead(sensor); 
    Serial.println(val);
    if (!val) {
      break;
    }
    delay(10);
  }
  
 digitalWrite(motorPin, LOW); 
 delay(3000);

  
    
}

//    digitalWrite(motorPin, HIGH);
//    delayMicroseconds(500); // Approximately 10% duty cycle @ 1KHz
//    digitalWrite(motorPin, LOW);
//    delayMicroseconds(1000 - 500);

//    int val = digitalRead(sensor);
//    Serial.println(val);
//    if (val) {
//      break; 
//    }
