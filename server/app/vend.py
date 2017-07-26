# from pyduino import *
import serial
def vending():

    ser = serial.Serial("COM3", 9600, timeout = 1)

    #connected to the android
    connected = False
    while not connected:
        fromAndroid = ser.read()
        if fromAndroid == b'1':
            connected = True

    # x = ser.write(b'1') #trigger android
    # print(x)
    ser.write(b'1')

    while True:
        if (ser.read() != b'0'):
            print(ser.read())
            ser.write(b'1');

    ser.close()
