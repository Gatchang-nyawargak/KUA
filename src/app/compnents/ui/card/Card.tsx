// Card.tsx
import React from 'react';

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
      {imageUrl && <img src={imageUrl} alt={title || ''} className="w-full h-48 object-cover" />}
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

// CardContent.tsx


export default Card ;