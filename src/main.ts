import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css'; // or white, moon, league
import Highlight from 'reveal.js/plugin/highlight';
import Notes from 'reveal.js/plugin/notes';
import Markdown from 'reveal.js/plugin/markdown';
import Zoom from 'reveal.js/plugin/zoom';
import 'reveal.js/plugin/highlight/monokai.css';
import './styles/main.scss';

const slideModules = import.meta.glob('./slides/*.html', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>;

function loadSlidesIntoDeck(): void {
    const slidesRoot = document.querySelector<HTMLDivElement>('.reveal .slides');
    if (!slidesRoot) {
        throw new Error('Reveal slides container not found in index.html');
    }

    const orderedSlides = Object.entries(slideModules)
        .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
        .map(([, html]) => html.trim())
        .join('\n');

    slidesRoot.innerHTML = orderedSlides;
}

async function setup(): Promise<void> {
    loadSlidesIntoDeck();

    const deck = new Reveal({
        hash: true,
        slideNumber: true,
        transition: 'slide',
        transitionSpeed: 'fast',
        backgroundTransition: 'fade',
        controls: true,
        progress: true,
        center: false,
        width: 1100,
        height: 650,
        margin: 0.06,
        plugins: [Zoom, Highlight, Markdown, Notes],
    });

    await deck.initialize();
}

setup();