const randolph = document.getElementById("randolph")
const radio = document.getElementById("radio")
const clickSound = new Audio("sound/close.wav")
const typingSound = new Audio("sound/typing.wav")
const speed = 20;
let value = 0;
typingSound.loop = true;

function onRandolph(id){
    console.log("randolph")
    clickSound.play()
    document.getElementById(id).disabled = true;
    document.getElementById("textBox").style.opacity = "100%";
    let i = 0;
    const txt = 'Welcome back. Want to listen to some tunes?';

    function typeWriter() {
        typingSound.play()
        if (i < txt.length) {
            document.getElementById("text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else{
            typingSound.pause()
            typingSound.currentTime = 0;
            one.disabled = false;
        }
    }
    typeWriter()
}

function onDialogueBtns(id) {
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const textBox = document.getElementById("textBox");
    const text = document.getElementById("text");



    // If the user presses the first choice button
    if (id === "one") {
        console.log("one")
        // If the label says the closing message
        if (one.innerHTML === "Thanks.") {
            textBox.style.opacity = 0;
            clickSound.play()
        }
        // For all other labels
        else {
            text.innerHTML = '';
            const t = "Great choice. You can use that radio over there to change the channel if you're not loving the song.";

            let i = 0;
            typingSound.play()

            function typeWriter() {
                if (i < t.length) {
                    document.getElementById("text").innerHTML += t.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    typingSound.pause()
                }
            }

            typeWriter()

            one.innerHTML = "Thanks."
            one.disabled = false;
            radio.disabled = false
        }
    }
}

function onRadio(id){
    const info = document.getElementById("info")
    console.log(value)
    let audio = document.getElementById(String(value));
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
        value += 1;
        audio = document.getElementById(String(value));
        audio.play();

    }
}

function onInfo(id){
    console.log("info")


}