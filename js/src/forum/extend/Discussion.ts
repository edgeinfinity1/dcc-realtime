import app from 'flarum/forum/app';
import NewActivity from './Discussion/NewActivity';
import TypingIndicator from './Discussion/TypingIndicator';

export default function Discussion() {
  NewActivity();

  if (!!app.data['blomstra-realtime.typing-indicator']) {
    TypingIndicator();
  }
}
