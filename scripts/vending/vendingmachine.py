import serial, time
from threading import Thread

class VendingMachine:
    ready = None
    arduino = None
    
    def read(self):
        while self.running:
            recv_data = arduino.readline()
            if recv_data.strip() == 'ready':
                self.ready = True
                break
            elif recv_data:
                print(recv_data) #strip out the new lines for now
                recv_data = ''

    def vend(self, function_id):
        if self.ready:
            self.arduino.write(str(function_id))

    def stop(this):
        self.ready = False

    def __init__(self):
        self.ready = False
        self.arduino = serial.Serial('/dev/cu.usbmodem1411', 9600, timeout=.1)
        time.sleep(1)

        read_thread = Thread(target=self.read)
        read_thread.join()

if __name__ == "__main__":
    vm = VendingMachine()
    vm.vend(4)