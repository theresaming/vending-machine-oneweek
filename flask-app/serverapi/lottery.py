from random import randint

VAL_BOX = 4
VAL_WHEEL = 5
VAL_COIL = 6
VAL_CONVEYOR = 7

NUM_BOX = 30
NUM_WHEEL = 14
NUM_COIL = 7
NUM_CONVEYOR = 12

class Lottery:
    __items = []

    def reset(self):
        self.__items = [VAL_BOX]*NUM_BOX + [VAL_WHEEL]*NUM_WHEEL + [VAL_COIL]*NUM_COIL + [VAL_CONVEYOR]*NUM_CONVEYOR

    def spin(self):
        if len(self.__items) == 0:
            return -1

        if randint(1, 4) == 1:
            return self.__items.pop(randint(0, len(self.__items)-1))
        else:
            return 0

    def get_num_items(self):
        return len(self.__items)

    def __init__(self):
        self.reset()

if __name__ == "__main__":
    lott = Lottery()
    print("running")
    for i in range(lott.get_num_items() + 4):
        print(lott.spin())