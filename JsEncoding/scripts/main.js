// Function to encode js with js
function url_encodeJS() {
    var textElement = document.getElementById("writePad");
    if (textElement.selectionStart != textElement.selectionEnd) {
        var start = textElement.selectionStart;
        var end = textElement.selectionEnd;
        var selectedText = textElement.value.substring(start, end);
        // Replace the text in the textarea via a slice
        var original = textElement.value;
        // Slice makes a new string from a sliced string
        var slice = original.slice(0, start) + encodeURIComponent(selectedText).replace(/'/g, "%27").replace(/"/g, "%22");
        textElement.value = slice;
    } else {
        // Replace the text in the textarea via a slice
        textElement.value = encodeURIComponent(textElement.value).replace(/'/g, "%27").replace(/"/g, "%22");
    }
}

// Function to decode js
function url_decodeJS() {
    var textarea = document.getElementById("writePad");
    var text = textarea.value;
    var encodedjs = decodeURIComponent(text.replace(/\+/g, " "));
    textarea.value = encodedjs;
}