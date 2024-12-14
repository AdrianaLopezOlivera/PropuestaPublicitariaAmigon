let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .typeString("Propuesta Publicitaria")
    .pauseFor(3000)
    .deleteAll()
    .typeString("Amigón & Amigón")
    .pauseFor(3000)
    .start();
