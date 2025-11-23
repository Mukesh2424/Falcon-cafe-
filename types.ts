export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  text: string;
  isComplete: boolean;
  timestamp: Date;
  orderData?: any;
}

export interface AudioVisualizerData {
  volume: number; // 0.0 to 1.0
}

export enum ConnectionState {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR',
}