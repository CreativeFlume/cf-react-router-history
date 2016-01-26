import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';

export function createHistory(windowExists) {
  return windowExists ? createBrowserHistory() : createMemoryHistory();
}

export default createHistory(typeof window !== 'undefined');
