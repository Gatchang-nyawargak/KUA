import React from 'react';
import Image from 'next/image';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  imageUrl?: string;
  description?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

const Card = ({
  title,
  imageUrl,
  description,
  actions,
  children,
  className = '',
  ...props
}: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`} {...props}>
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image src={imageUrl} alt={title || ''} layout="fill" objectFit="cover" />
        </div>
      )}
      {(title || description) && (
        <div className="p-4">
          {title && <h2 className="text-xl font-semibold text-gray-900">{title}</h2>}
          {description && <p className="text-gray-600 mt-2">{description}</p>}
          {actions && <div className="mt-4">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
