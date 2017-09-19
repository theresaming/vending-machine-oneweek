# from pyduino import *
import serial
def vending():

    ser = serial.Serial("/dev/tty.usbmodem14111", 9600, timeout = 1)

    #connected to the android
    connected = False
    while not connected:
        fromAndroid = ser.read()
        print(fromAndroid)
        if fromAndroid == b'1':
            connected = True

    # x = ser.write(b'1') #trigger android
    # print(x)
    ser.write(b'1')

    if (ser.read() != b'0'):
        print(ser.read()== b'0')
        ser.read()

    ser.close()
