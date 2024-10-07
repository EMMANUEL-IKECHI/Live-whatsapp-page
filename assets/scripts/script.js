let contactMessage = document.getElementsByClassName("contact-message-details");
let chatSection = document.querySelector(".chat-section");
let contactChat = document.querySelector(".contact-chat");
let exitChat = document.querySelector(".return");
for (let i = 0; i < contactMessage.length; i++) {
    contactMessage[i].addEventListener ("click", () => {
        console.log(contactMessage[i]);
        chatSection.style.left = "-100%";
        contactChat.style.display = "block";
        contactChat.style.width = "100vw";
        contactChat.style.left = "0";
        // contactChat.style.transition = "all linear 1s";
    });
}

exitChat.addEventListener("click", ()=> {
        chatSection.style.left = "0";
        contactChat.style.display = "block";
        // contactChat.style.width = "100vw";
        contactChat.style.left = "100%";
        contactChat.style.transition = "all linear .2s";
        chatSection.style.transition = "all linear .3s";
})
