import './style.scss'

let curX: number = 0;
let curY: number = 0;
let tgX: number = 0;
let tgY: number = 0;
let interBubble: HTMLDivElement;

document.addEventListener('DOMContentLoaded', () => {
    interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
    move(); // Start the animation when the document is ready and the element is found
});

function move(): void {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    if (interBubble) { // Check if interBubble is not null
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    }
}

window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
});

