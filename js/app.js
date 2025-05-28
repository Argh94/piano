const pianoNotes = [
    { key: 37, src: "C3.mp3" },
    { key: 123, src: "D3.mp3" },
    { key: 8, src: "Db3.mp3" },
    { key: 59, src: "E3.mp3" },
    { key: 173, src: "Eb3.mp3" },
    { key: 61, src: "F3.mp3" },
    { key: 13, src: "G3.mp3" },
    { key: 122, src: "Gb3.mp3" },
    { key: 187, src: "A3.mp3" },
    { key: 221, src: "Ab4.mp3" }, // Ab4 به‌عنوان Ab3
    { key: 222, src: "B3.mp3" },
    { key: 191, src: "Bb3.mp3" },
];

const $ = document;
const notesDirectory = "https://raw.githubusercontent.com/argh94/piano/main/notes/";

for (let i = 0; i < pianoNotes.length; i++) {
    const audioElem = $.createElement("audio");
    audioElem.id = pianoNotes[i].key;
    audioElem.src = notesDirectory + pianoNotes[i].src;
    document.body.append(audioElem);
}

// رویداد کیبورد
document.addEventListener("keydown", function (e) {
    e.preventDefault();
    const audios = $.getElementsByTagName("audio");
    pianoNotes.forEach(function (note) {
        const selectedElement = $.getElementById(note.key);
        if (e.keyCode == note.key) {
            for (let i = 0; i < audios.length; i++) {
                audios[i].pause();
                audios[i].currentTime = 0;
            }
            selectedElement.play();
            const keyElement = $.querySelector(`.key[data-key="${note.key}"]`);
            keyElement.classList.add("active");
            setTimeout(() => {
                keyElement.classList.remove("active");
            }, 200);
        }
    });
});

// رویداد کلیک
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', function () {
        const keyCode = this.getAttribute('data-key');
        const note = pianoNotes.find(note => note.key == keyCode);
        if (note) {
            const audios = document.getElementsByTagName('audio');
            for (let i = 0; i < audios.length; i++) {
                audios[i].pause();
                audios[i].currentTime = 0;
            }
            const audio = document.getElementById(keyCode);
            audio.play();
            this.classList.add('active');
            setTimeout(() => this.classList.remove('active'), 200);
        }
    });
});
