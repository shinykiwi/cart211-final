function onClick(id){
    const one = document.getElementById("one")
    const two = document.getElementById("two")
    const randolph = document.getElementById("randolph")

    const textBox = document.getElementById("textBox")
    const text = document.getElementById("text")
    const blip = new Audio("sound/explosion-3.wav")
    blip.playbackRate = 1.5;

    one.disabled = true
    two.disabled = true

    if(id === "one") {
        if (one.innerHTML === "Thanks."){
            textBox.style.opacity = 0;
        }
        else{
            const t = "Great choice. You can use that radio over there to change the channel if you're not loving the song.";
            const speed = 50;
            let i = 0;
            function typeWriter() {
                if (i < t.length) {
                    document.getElementById("text").innerHTML += t.charAt(i);
                    i++;
                    blip.play()
                    setTimeout(typeWriter, speed);
                }
            }
            typeWriter()

            one.innerHTML = "Thanks."
            one.disabled = false;

        }

    }

    else if (id === "two"){
        text.innerHTML = "Alright, suit yourself."
    }

    else if (id === "randolph"){
        randolph.disabled = true;
        textBox.style.opacity = "100%";
        let i = 0;
        const txt = 'Welcome back. Want to listen to some tunes?';
        const speed = 50;

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("text").innerHTML += txt.charAt(i);
                i++;
                blip.play()
                setTimeout(typeWriter, speed);
            }
            else{
                one.disabled = false;
                two.disabled = false;

            }
        }
        typeWriter()


    }

}