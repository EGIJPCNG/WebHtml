// Select all <p> elements
function cambioFuente(){
    var paragraphs = document.getElementsByTagName('p');

    // Define an array of font families
    var fontFamilies = ['Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia'];
    // Loop through the selected elements
    for(var i = 0; i < paragraphs.length; i++) {
        // Generate a random index for the fontFamilies array
        var randomIndex = Math.floor(Math.random() * fontFamilies.length);
        // Change the font style to a random font family
        paragraphs[i].style.fontFamily = fontFamilies[randomIndex] + ', sans-serif';
    }
}
