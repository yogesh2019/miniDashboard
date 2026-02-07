import { Component } from '@angular/core';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {

  messages: ChatMessage[] = [
    { sender: 'bot', text: 'Hello! How can I help you?' }
  ];

  userInput = '';

  sendMessage(): void {
    if (!this.userInput.trim()) {
      return;
    }

    // user message
    this.messages.push({
      sender: 'user',
      text: this.userInput
    });

    // static bot reply (placeholder)
    this.messages.push({
      sender: 'bot',
      text: 'I am a demo chatbot. AI will be added later.'
    });

    this.userInput = '';
  }
}
