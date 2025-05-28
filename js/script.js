import * as Tone from 'https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js';

const synth = new Tone.Synth().toDestination();
const keys = document.querySelectorAll('.key');
const startButton = document.getElementById('startButton');

// فعال‌سازی AudioContext با کلیک روی دکمه
startButton.addEventListener('click', async () => {
    await Tone.start();
    console.log('AudioContext فعال شد');
    startButton.disabled = true; // غیرفعال کردن دکمه پس از کلیک
});

// اتصال رویدادهای کلیک به کلیدهای پیانو
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
});

// تابع پخش نت
function playNote(key) {
    const note = key.dataset.note;
    synth.triggerAttackRelease(note, '8n');
}
