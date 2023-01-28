import React from 'react';
import dynamic from 'next/dynamic';

export type ClientOnlyProps = React.PropsWithChildren<unknown>;
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) =>
// eslint-disable-next-line react/jsx-no-useless-fragment,implicit-arrow-linebreak
  <>{children}</>;
export default dynamic(() => Promise.resolve({ default: ClientOnly }), {
  ssr: false,
});
