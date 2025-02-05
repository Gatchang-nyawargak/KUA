import React from 'react';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardContent = ({ children, className = '', ...props }: CardContentProps) => {
  return <div className={`p-4 ${className}`} {...props}>{children}</div>;
};

export default CardContent;
