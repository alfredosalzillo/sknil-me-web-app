import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export type PushNotificationOptions = {
  message: React.ReactNode,
  severity: 'error' | 'warning' | 'info' | 'success',
  action?: React.ReactNode,
  autoHideDuration?: number,
};

export type Notification = PushNotificationOptions & {
  id: string,
  open: boolean,
};

const createNotificationStore = () => {
  const eventTarget = new EventTarget();
  const emitChange = () => eventTarget.dispatchEvent(new Event('change'));

  return {
    notifications: [] as Notification[],
    flushClosed() {
      this.notifications = this.notifications.filter((notification) => notification.open);
      emitChange();
    },
    push(notification: PushNotificationOptions) {
      const {
        autoHideDuration = 5000,
      } = notification;
      const id = uuidv4();
      this.notifications = [
        ...this.notifications,
        {
          ...notification,
          id,
          open: true,
          autoHideDuration,
        },
      ];
      setTimeout(() => {
        this.close(id);
      }, autoHideDuration);
      emitChange();
      this.flushClosed();
    },
    close(id: string) {
      this.notifications = this.notifications.map((notification) => {
        if (notification.id === id) {
          return {
            ...notification,
            open: false,
          };
        }
        return notification;
      });
      emitChange();
    },
    subscribe(callback: () => void) {
      eventTarget.addEventListener('change', callback);
      return () => eventTarget.removeEventListener('change', callback);
    },
  };
};

const store = createNotificationStore();

export default store;
