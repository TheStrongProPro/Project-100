var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition()

function start() {
    document.getElementById('textbox').innerHTML = "";
    recognition.start()
}

recognition.onresult = function (event) {
    var content = event.results[0][0].transcript
    if (content == 'take my selfie') {
        console.log('Taking selfie in 5 seconds')
        speak()
    }
}


function speak() {
    var synth = window.speechSynthesis

    speak_data = "Taking your Selfie in 2 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)
    Webcam.attach(camera)
    take_snapshot()
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById('camera')



function take_snapshot() {
    document.getElementById('result').innerHTML = ""
    setTimeout(() => {
        Webcam.snap(function (data_url) {
            document.getElementById('result').innerHTML += `<div >
            <img src=${data_url} id="result1" style="width: 30%;">
        </div>
        
    `
        })
        save('result1')
    }, 2000);
    setTimeout(() => {
        Webcam.snap(function (data_url) {
            document.getElementById('result').innerHTML += `<div >
            <img src=${data_url} id="result2" style="width: 30%;">
        </div>
        
    `
        })
        save('result2')
    }, 2000);
    setTimeout(() => {
        Webcam.snap(function (data_url) {
            document.getElementById('result').innerHTML += `<div >
            <img src=${data_url} id="result3" style="width: 30%;">
        </div>
        
    `
        })
        save('result3')
    }, 2000);
    
}

function save(id) {
    link = document.getElementById('link')
    image = document.getElementById(id).src
    link.href = image
    link.click()
}