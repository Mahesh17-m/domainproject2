import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit() {
    // Handle form submission
    alert('Message sent successfully!');
  }
  responses: { [key: string]: string } = {
    "hi": "Hello! How can I help you?",
    "how are you": "I'm just a chatbot, but thank you for asking!",
    "what is your name": "I'm just a chatbot, I don't have a name.",
    "bye": "Goodbye! Have a great day!",
  };

  sendMessage() {
    const userInput = (document.getElementById("user-input") as HTMLInputElement).value;
    const chatBox = document.getElementById("chat-box") as HTMLDivElement;

    // Display user message
    chatBox.innerHTML += `<div class="message user-message">You: ${userInput}</div>`;

    // Get response from chatbot
    const response = this.responses[userInput.toLowerCase()] || "I'm sorry, I didn't understand that.";

    // Display chatbot response
    chatBox.innerHTML += `<div class="message chatbot-message">Chatbot: ${response}</div>`;

    // Clear user input
    (document.getElementById("user-input") as HTMLInputElement).value = "";

    // Scroll to the bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  toggleChatWidget() {
    const chatWidget = document.getElementById("chat-widget") as HTMLDivElement;
    chatWidget.style.display = chatWidget.style.display === "none" || chatWidget.style.display === "" ? "block" : "none";
  }

}
