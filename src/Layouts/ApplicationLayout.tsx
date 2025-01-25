import React, { memo, ReactNode } from "react";

interface ApplicationLayoutProps {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  contentClassName?: string;
  footerClassName?: string;
  headerClassName?: string;
}

const ApplicationLayout: React.FC<ApplicationLayoutProps> = memo(function ApplicationLayout({
  header,
  content,
  footer,
  contentClassName = "",
  footerClassName = "",
  headerClassName,
}) {
  return (
    <>
      <div className="w-full h-screen font-inter space-y-12 bg-white flex flex-col">
        {header && (
          <div className={`flex flex-col lg:space-y-5 ${headerClassName}`}>
            {header}
          </div>
        )}

        {content && (
          <div className={`flex flex-col flex-1 h-full space-y-8 ${contentClassName}`}>
            {content}
          </div>
        )}

        {footer && (
          <div className={`flex flex-col space-y-8 bg-white ${footerClassName}`}>
            {footer}
          </div>
        )}
      </div>
    </>
  );
});

export default ApplicationLayout;
