'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RefreshListener = () => {
  const router = useRouter();
  useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (event.data === 'refresh') {
        router.refresh();
      }
    };
    window.addEventListener('message', listener);
    return () => window.removeEventListener('message', listener);
  });
  return null;
};

export default RefreshListener;
