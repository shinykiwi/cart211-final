function onClick(id){
    const one = document.getElementById("one")
    const two = document.getElementById("two")
    const randolph = document.getElementById("randolph")

    const textBox = document.getElementById("textBox")
    const text = document.getElementById("text")
    const clickSound = new Audio("sound/close.wav")
    const typingSound = new Audio("sound/typing.wav")
    const speed = 45;

    const songs =[
        new Audio("sound/peggy.wav"),
    ]

    songs[0].volume = 0.5
    typingSound.loop = true

    one.disabled = true
    two.disabled = true

    if(id === "one") {
        if (one.innerHTML === "Thanks."){
            textBox.style.opacity = 0;
            clickSound.play()
        }
        else{
            text.innerHTML = '';
            const t = "Great choice. You can use that radio over there to change the channel if you're not loving the song.";
            let i = 0;
            typingSound.play()
            songs[0].play()
            function typeWriter() {
                if (i < t.length) {
                    document.getElementById("text").innerHTML += t.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
                else{
                    typingSound.pause()
                }
            }
            typeWriter()

            one.innerHTML = "Thanks."
            one.disabled = false;

        }

    }

    else if (id === "randolph"){
        clickSound.play()
        randolph.disabled = true;
        textBox.style.opacity = "100%";
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

}