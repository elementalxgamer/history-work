function reply(yes) {
    const result = document.getElementById("result");

    if (yes) {
        result.textContent = "Ok thanks 😎🙏";
    } else {
        result.textContent = "Ok 💀";
    }
}
