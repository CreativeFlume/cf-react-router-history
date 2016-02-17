import { browserHistory } from 'react-router';
import { memoryHistory } from 'react-router';

export function createHistory(windowExists) {
  return windowExists ? browserHistory : memoryHistory;
}

export default createHistory(typeof window !== 'undefined');
