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
