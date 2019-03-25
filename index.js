window.onload = onloadF

function onloadF() {
    let values = [1, 5, 6, 8, 10]

    debugger

    function multiplyByPI(value) {

        let student = {
            name: "x",
            mark: [1, 2, 10],
            bootcamp: "madwebdev0319"
        }

        // debugger

        //more code
        //more code
        //more code
        //more code
        //more code
        //more code
        //more code
        //more code
        return value * Math.PI;
    }

    const outputDOMEl = document.querySelector("#output")

    outputDOMEl.style.display = "block"
    // outputDOMEl.innerHTML = output[1]

    let output = values.map(function (value) {
        debugger
        return multiplyByPI(value)
    })



    document.querySelector("#test").onclick = function () {

        const outputDOMEl = document.querySelector("#output")

        outputDOMEl.style.display = "block"
        outputDOMEl.innerHTML = output[1]

    }


}