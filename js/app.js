const pianoNotes = [
  { key: 109, src: "A0.mp3" },
  { key: 107, src: "Ab1.mp3" },
  { key: 12, src: "B0.mp3" },
  { key: 106, src: "Bb0.mp3" },
  { key: 105, src: "C1.mp3" },
  { key: 102, src: "D1.mp3" },
  { key: 99, src: "Db1.mp3" },
  { key: 110, src: "E1.mp3" },
  { key: 111, src: "Eb1.mp3" },
  { key: 104, src: "F1.mp3" },
  { key: 101, src: "G1.mp3" },
  { key: 98, src: "Gb1.mp3" },
  { key: 96, src: "A1.mp3" },
  { key: 144, src: "Ab2.mp3" },
  { key: 103, src: "B1.mp3" },
  { key: 100, src: "Bb1.mp3" },
  { key: 97, src: "C2.mp3" },
  { key: 19, src: "D2.mp3" },
  { key: 33, src: "Db2.mp3" },
  { key: 34, src: "E2.mp3" },
  { key: 39, src: "Eb2.mp3" },
  { key: 145, src: "F2.mp3" },
  { key: 36, src: "G2.mp3" },
  { key: 35, src: "Gb2.mp3" },
  { key: 38, src: "A2.mp3" },
  { key: 40, src: "Ab3.mp3" },
  { key: 45, src: "B2.mp3" },
  { key: 46, src: "Bb2.mp3" },
  { key: 37, src: "C3.mp3" },
  { key: 123, src: "D3.mp3" },
  { key: 8, src: "Db3.mp3" },
  { key: 59, src: "E3.mp3" },
  { key: 173, src: "Eb3.mp3" },
  { key: 61, src: "F3.mp3" },
  { key: 13, src: "G3.mp3" },
  { key: 122, src: "Gb3.mp3" },
  { key: 187, src: "A3.mp3" },
  { key: 221, src: "Ab4.mp3" },
  { key: 222, src: "B3.mp3" },
  { key: 191, src: "Bb3.mp3" },
  { key: 219, src: "C4.mp3" },
  { key: 121, src: "D4.mp3" },
  { key: 120, src: "Db4.mp3" },
  { key: 189, src: "E4.mp3" },
  { key: 80, src: "Eb4.mp3" },
  { key: 186, src: "F4.mp3" },
  { key: 190, src: "G4.mp3" },
  { key: 48, src: "Gb4.mp3" },
  { key: 79, src: "A4.mp3" },
  { key: 76, src: "Ab5.mp3" },
  { key: 188, src: "B4.mp3" },
  { key: 119, src: "Bb4.mp3" },
  { key: 18, src: "C5.mp3" },
  { key: 118, src: "D5.mp3" },
  { key: 57, src: "Db6.mp3" },
  { key: 75, src: "E5.mp3" },
  { key: 73, src: "Eb5.mp3" },
  { key: 77, src: "F5.mp3" },
  { key: 32, src: "G5.mp3" },
  { key: 117, src: "Gb5.mp3" },
  { key: 56, src: "A5.mp3" },
  { key: 116, src: "Ab6.mp3" },
  { key: 55, src: "B5.mp3" },
  { key: 85, src: "Bb5.mp3" },
  { key: 74, src: "C6.mp3" },
  { key: 78, src: "D6.mp3" },
  { key: 54, src: "Db7.mp3" },
  { key: 89, src: "E6.mp3" },
  { key: 72, src: "Eb6.mp3" },
  { key: 115, src: "F6.mp3" },
  { key: 53, src: "G6.mp3" },
  { key: 84, src: "Gb6.mp3" },
  { key: 71, src: "A6.mp3" },
  { key: 66, src: "Ab7.mp3" },
  { key: 114, src: "B6.mp3" },
  { key: 52, src: "Bb6.mp3" },
  { key: 82, src: "C7.mp3" },
  { key: 70, src: "D7.mp3" },
  { key: 86, src: "Db8.mp3" },
  { key: 113, src: "E7.mp3" },
  { key: 51, src: "Eb7.mp3" },
  { key: 69, src: "F7.mp3" },
  { key: 68, src: "G7.mp3" },
  { key: 67, src: "Gb7.mp3" },
  { key: 112, src: "A7.mp3" },
  { key: 50, src: "B7.mp3" },
  { key: 87, src: "Bb7.mp3" },
  { key: 83, src: "C8.mp3" },
  { key: 88, src: "G7.mp3" },
  { key: 49, src: "Gb7.mp3" },
  { key: 81, src: "S1.wav" },
  { key: 65, src: "S2.wav" },
  { key: 90, src: "S3.wav" },
  { key: 192, src: "S4.wav" },
  { key: 9, src: "S5.wav" },
  { key: 20, src: "S6.wav" },
];

const $ = document;
const notesDirectory = "./notes/";

for (let i = 0; i < pianoNotes.length; i++) {
  const audioElem = $.createElement("audio");
  audioElem.id = pianoNotes[i].key;
  audioElem.src = notesDirectory + pianoNotes[i].src;
  document.body.append(audioElem);
}

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

          // Add active class to the key
          const keyElement = $.querySelector(`.key[data-key="${note.key}"]`);
          keyElement.classList.add("active");

          // Remove active class after 200ms
          setTimeout(() => {
              keyElement.classList.remove("active");
          }, 200);
      }
  });
});
