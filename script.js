
const resultElement = document.getElementById("result")
let recognitiion;



function startConverting(){

    if('webkitSpeechRecognition' in window){

        recognitiion = new webkitSpeechRecognition();

        setupRecognition(recognitiion);

        recognitiion.start();
        
    }


}

function setupRecognition(recognitiion){

    recognitiion.continuous = true;

    recognitiion.interimResults = true;

    recognitiion.lang = 'en-US';

    recognitiion.onresult = function(event){

        const {finalTranscript, interTranscript} =
        processResult(event.results);
        resultElement.innerHTML = finalTranscript + interTranscript;
    }

}

function processResult(results){

    let finalTranscript = '';
    let interTranscript = '';

    for(let i = 0; i < results.length; i++){

        let transcript = results[i] [0].transcript;
        transcript.replace("\n", "<br>");

        if(results[i].isFinal){

            finalTranscript += transcript;

        }else{

            interTranscript += transcript;

        }
    }

    return {finalTranscript, interTranscript}


}

function stopConverting(){

    if(recognitiion){
        recognitiion.stop();
    }

}