

class Meditation {
    times: number;
    constructor(times: number) {
        this.times = times;
    }
    start() {
        setTimeout(() => {
            for (let i = this.times; i > 0; i--) {
                console.log(i)
            }
            console.log("Jay Guru Dev");
        }
            , 0)
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

