import { useRouterHistory, memoryHistory, browserHistory } from 'react-router';

export function createHistory(windowExists) {
  return windowExists ? useRouterHistory(browserHistory) : useRouterHistory(memoryHistory);
}

export default createHistory(typeof window !== 'undefined');
