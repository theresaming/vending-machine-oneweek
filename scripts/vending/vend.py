import serial, time

class VendingMachine:
    ready = None
    running = None
    arduino = None

    def read(self):
        while running:
            recv_data = arduino.readline()
            if recv_data == 'ready':
                this.ready = True
            elif recv_data:
                print(recv_data) #strip out the new lines for now
                recv_data = ""

    def stop(this):
        this.running = False

    def __init__(this):
        this.running = True
        this.ready = False
        this.arduino = serial.Serial('/dev/cu.usbmodem1411', 9600, timeout=.1)
        time.sleep(1)
        this.arduino.write("123")

