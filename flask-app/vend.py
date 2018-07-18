import serial, time
from threading import Thread

arduino = serial.Serial('/dev/cu.usbmodem1411', 9600, timeout=.1)
time.sleep(1)
arduino.write("123")

running = True

def read():
    global running
    while running:
        recv_data = arduino.readline()
        if recv_data:
            print(recv_data) #strip out the new lines for now
            recv_data = ""

def write():
    global running
    while running:
        input_data = raw_input().strip()
        arduino.write(input_data)

        if input_data == "stop":
            running = False

read_thread = Thread(target=read)
write_thread = Thread(target=write)

read_thread.start()
write_thread.start()

read_thread.join()
