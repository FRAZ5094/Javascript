function setup() {

    delay(1000).then(() => createP("hello")).catch((err) => console.error(err));


    delay("give me an error").then(() => createP("hello")).catch((err) => console.error(err));


    delay(1000).then(() => createP("hello")).catch((err) => console.error(err));


}


function delay(time) {
    return new Promise((resolve, reject) => {

        if (isNaN(time)) { // isNaN checks if its a number (not a number)
            reject(new Error("delay must be a number"));
        }


        setTimeout(resolve, time); // the callback for the setTimeout function makes the promise resolved
    });

}
