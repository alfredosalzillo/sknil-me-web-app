import store, {PushNotificationOptions} from './store';

const pushNotification = (notification: PushNotificationOptions) => {
  store.push(notification);
};

export default pushNotification;
