import type { Sender } from './Sender';

export type Message = {
  id: string;
  sender: Sender;
  content: string;
  timestamp: string;
};

