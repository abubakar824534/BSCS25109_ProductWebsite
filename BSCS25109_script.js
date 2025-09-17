


 //  Welcome Popup task
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("welcomePopup");
    if (popup) {
        popup.style.display = "flex";

        document.getElementById("closePopup").addEventListener("click", function () {
            popup.style.display = "none";
        });
    }

    const currentYearSpan = document.getElementById("currentYear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

// Task  Check Stock Buttons
function checkStock(product) {
    if (product === "Lumi Portable Projector") {
        alert(product + " is Not in Stock");
    } else {
        alert(product + " is In Stock");
    }
}

// Task  Form Validation
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            let isValid = true;

            
            const nameError = document.getElementById("name-error");
            if (name === "") {
                nameError.textContent = "Name is required";
                isValid = false;
            } else {
                nameError.textContent = "";
            }

           
            const emailError = document.getElementById("email-error");
            if (email === "") {
                emailError.textContent = "Email is required";
                isValid = false;
            } else if (!validateEmail(email)) {
                emailError.textContent = "Invalid email format";
                isValid = false;
            } else {
                emailError.textContent = "";
            }

           
            const messageError = document.getElementById("message-error");
            if (message === "") {
                messageError.textContent = "Message is required";
                isValid = false;
            } else {
                messageError.textContent = "";
            }

           
            if (isValid) {
                document.getElementById("success-message").textContent = "Form submitted successfully!";
            }
        });
    }

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
});

// Task  AI Chatbot
document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const chatbotContainer = document.getElementById("chatbot-container");

    if (chatBox && userInput && sendBtn && chatbotContainer) {
        
        displayMessage("Hello! How can I help you with your query?", "bot");

        sendBtn.addEventListener("click", sendMessage);
        userInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                sendMessage();
            }
        });
    }

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        displayMessage(userMessage, "user");
        userInput.value = "";
        
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            displayMessage(botResponse, "bot");
        }, 500); 
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        
        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi"))
            
            {
            return "Hello! How can I assist you today?";
        } 
        else if (lowerCaseMessage.includes("product") || lowerCaseMessage.includes("items"))
            
            {
            return "You can view our products on the PRODUCTS page.";
        }
         else if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("support"))
             
            {
            return "You can find our contact details on the ABOUT US page.";
        } 
        else if (lowerCaseMessage.includes("thank"))
             
            {
            return "You're welcome! Feel free to ask if you have more questions.";
        }
         else 
            {
            return "I am a simple chatbot. I can answer questions about products, contact information, or say hello.";
        }
    }
});


