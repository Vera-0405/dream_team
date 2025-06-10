
// Создать класс Battery, который инициализирует поля type (AA, AAA),
// energy (заряд, по умолчанию 100, заряд не может быть меньше 0 и больше 100).
class Battery{#energy=100;
     constructor(type)
    {this.type=type;}
    get(energy){return this.#energy};
    set(energy){ if (value<0 && value>100){this.#energy=value;

    }

    }

}
const battery = new Battery(`AA`); console.log(battery);

// Создать класс Device, который принимает параметр batteryType (AA, AAA) и имеет метод
// insertBattery, который принимает два параметра (две
// батарейки, два объекта типа Battery). 
class Device {
    constructor(batteryType){
        this.batteryType=batteryType;
    }
    insertBattery(battery1,battery2){};
}

// 
// Создать класс Gamepad, который наследует от
// Device. Инстанс класса Gamepad должен содержать поле model, поле
// isConnected (boolean) и методы connectTo(deviceName), который
// принимает название другого девайса и выводит сообщение
// типа “gamepadModel connected to TV”
// , метод disconnect() (который переключает isConnected в false),
// который отключает Gamepad,
// также должен быть метод play(), который
// отнимает 10 зарядов от каждой батареи (и выводит в консоль сообщение вида "you are playing!")

// Если хотя бы одно (при insertBattery())
// поле batteryType у Device и type у Battery не совпадают, то
// вывести сообщение что батарейки не вставлены.

// Подключить один девайс к другому можно только если есть
// 2 батарейки (и заряд обеих больше 0). Подключить Gamepad можно только если
// isConnected == false. 
// Если заряд батареек == 0, то метод
// play вернет сообщение с требованием замены батареек.