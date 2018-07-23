import serial, time
from threading import Thread

class VendingMachine:
    running = None
    ready = None
    arduino = None
    
    def read(self):
        while self.running:
            recv_data = self.arduino.readline()
            if recv_data.strip() == 'ready':
                self.ready = True
                break
            elif recv_data:
                print(recv_data) #strip out the new lines for now
                recv_data = ''

    def vend(self, function_id):
        if self.ready:
            self.arduino.write(str(function_id))

    def stop(self):
        self.ready = False

    def __init__(self):
        self.ready = False
        self.running = True
        self.arduino = serial.Serial('COM1', 9600, timeout=.1)
        time.sleep(1)

        read_thread = Thread(target=self.read)
        read_thread.start()
        read_thread.join()

if __name__ == "__main__":
    vm = VendingMachine()
    input_data = input().strip()
    vm.arduino.write(input_data)