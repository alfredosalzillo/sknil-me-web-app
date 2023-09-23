import { useSyncExternalStore } from 'react';
import store, { Notification } from './store';

const serverSnapshot = [] as Notification[];
const useNotifications = () => useSyncExternalStore(
  store.subscribe,
  () => store.notifications,
  () => serverSnapshot,
);

export default useNotifications;
