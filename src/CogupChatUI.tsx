import React from 'react';

export interface CogupChatUIProps {
  message: string;
}

const CogupChatUI: React.FC<CogupChatUIProps> = ({ message }: {message: string}) => {
  return <div>{message}</div>;
};

export default CogupChatUI;
