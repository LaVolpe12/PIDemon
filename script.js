function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    // Überprüfen, ob der Abschnitt aktuell sichtbar ist
    if (section.style.display === "none") {
        // Abschnitt anzeigen
        section.style.display = "block";
    } else {
        // Abschnitt ausblenden
        section.style.display = "none";
    }
}

window.addEventListener('resize', adjustPadding);

function adjustPadding() {
    const footer = document.querySelector('footer');
    const body = document.querySelector('body');
    const footerHeight = footer.offsetHeight;
    body.style.paddingBottom = footerHeight + 'px';
}

// Ruf die Funktion einmal beim Laden der Seite auf, um sicherzustellen,
// dass das Padding von Anfang an korrekt gesetzt ist.
adjustPadding();
