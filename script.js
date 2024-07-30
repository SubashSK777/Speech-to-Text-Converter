const resultElement = document.getElementById("result");
let recognition;

document.addEventListener("DOMContentLoaded", function() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        console.log('Your browser supports SpeechRecognition.');
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        setupRecognition(recognition);
    } else {
        alert('Your browser does not support speech recognition.');
    }
});

function startConverting(){
    if(recognition){
        recognition.start();
    }
}

function setupRecognition(recognition){
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.onresult = function(event){
        const { finalTranscript, interTranscript } = processResult(event.results);
        resultElement.innerHTML = finalTranscript + interTranscript;
    };
}

function processResult(results){
    let finalTranscript = '';
    let interTranscript = '';
    for(let i = 0; i < results.length; i++){
        let transcript = results[i][0].transcript;
        transcript = transcript.replace("\n", "<br>");
        if(results[i].isFinal){
            finalTranscript += transcript;
        } else {
            interTranscript += transcript;
        }
    }
    return { finalTranscript, interTranscript };
}

function stopConverting(){
    if(recognition){
        recognition.stop();
    }
}
