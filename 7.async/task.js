class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || typeof callback !== "function") {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        } 
            
        this.alarmCollection.push({
            callback: callback,
            time: time, 
            canCall: true 
        });  
    }

    removeClock(time_delete) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time_delete);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        const formattedTime = hours + ':' + minutes;
        return formattedTime;
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false; 
                    alarm.callback();       
                }
            });
        }, 1000); // проверка каждую секунду
    }
    
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
         this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
         });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}