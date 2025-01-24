import { notification } from 'antd';
import { TNotificationType } from '@types';

export const useNotification = () => {
  const showNotification = (
    type: TNotificationType,
    message: string,
    description?: string
  ) => {
    notification[type]({
      message,
      description,
      placement: 'topRight',
      duration: 3,
    });
  };

  return { showNotification };
};
