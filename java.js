const TextToVoice = document.getElementById("text-to-voice");
const SelectVoice = document.getElementById("select-voice");
const btn = document.getElementById("voice");

let ovozlar = [];


function loadVoices() {
    ovozlar = window.speechSynthesis.getVoices();
    if (ovozlar.length > 0) {
        SelectVoice.innerHTML = "";
        ovozlar.forEach((ovoz, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = ovoz.lang + " - " + ovoz.name;
            SelectVoice.appendChild(option);
        })
    } else {
        SelectVoice.innerHTML = '<option value=""> Ovozlar topilmadi !! </option>'
    }


}



function tekshir() {
    console.log(ovozlar.length);

    if (ovozlar.length === 0) {
        loadVoices();
    }
    if (ovozlar.length === 0) {
        setTimeout(tekshir, 500);
    }

}

loadVoices();
tekshir();





function gapir() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = TextToVoice.value;
    const o=SelectVoice.value;
    if (o){
        msg.voice=ovozlar[o];
    }
    speechSynthesis.speak(msg);

}


btn.addEventListener("click", ()=>{
 gapir();
})








