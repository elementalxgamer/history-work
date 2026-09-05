function reply(answer) {
    const result = document.getElementById("result");

    if (answer) {
        result.textContent = "> ACCESS GRANTED ✓  |  Ok thanks 😎🙏";
    } else {
        result.textContent = "> ACCESS DENIED ✕  |  Ok 💀";
    }
}
