import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {

  messages: ChatMessage[] = [
    { sender: 'bot', text: 'Hello! How can I help you?' }
  ];

  userInput = '';
  isLoading = false;

  constructor(private chatService: ChatService) {}

  sendMessage(): void {
    if (!this.userInput.trim()) {
      return;
    }

    const message = this.userInput;

    this.messages.push({ sender: 'user', text: message });
    this.userInput = '';
    this.isLoading = true;

    this.chatService.sendMessage(message).subscribe({
      next: (res) => {
        this.messages.push({
          sender: 'bot',
          text: res.reply
        });
        this.isLoading = false;
      },
      error: () => {
        this.messages.push({
          sender: 'bot',
          text: 'Something went wrong. Please try again.'
        });
        this.isLoading = false;
      }
    });
  }
}
