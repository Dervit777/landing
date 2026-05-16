function showAlert() {
    alert("Спасибо за интерес! Мы свяжемся с вами.");
}

document.getElementById("subscribeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = this.querySelector("input").value;
    const msg = document.getElementById("formMessage");
    msg.textContent = `Спасибо, ${email}! Вы подписаны.`;
    msg.style.color = "green";
    this.reset();
});
