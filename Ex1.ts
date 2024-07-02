

class Meditation {
    times: number;
    constructor(times: number) {
        this.times = times;
    }
    start() {
        const intervalId = setInterval(() => {
            console.log(this.times--);
            if (this.times == 0) {
                console.log("Jay Guru Dev");
                clearInterval(intervalId);
            }
        }, 1000);
    }

}


export function ShowResult() {

    const morning_meditation = new Meditation(5);
    morning_meditation.start();
    console.log(`Start meditation`);

    // Start meditation
    // 5
    // 4
    // 3
    // 2
    // 1
    // Jay Guru Dev


}

