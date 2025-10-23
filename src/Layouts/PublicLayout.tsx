import React, { memo, ReactNode } from "react";

interface FooterProps {
  content: ReactNode;
  copyright: ReactNode;
}

interface PublicLayoutProps {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode | FooterProps;
  contentClassName?: string;
  footerClassName?: string;
  headerClassName?: string;
}

const PublicLayout: React.FC<PublicLayoutProps> = memo(function PublicLayout({
  header,
  content,
  footer,
  contentClassName = "",
  footerClassName = "",
  headerClassName,
}) {
  return (
    <>
      <div className="w-full max-h-screen font-inter bg-white flex flex-col">
        {header && (
          <div className={`flex  flex-col ${headerClassName}`}>
            {header}
          </div>
        )}

        {content && (
          <div className={`flex flex-col flex-1 h-full bg-white space-y-16 ${contentClassName}`}>
            {content}
          </div>
        )}

        {footer && (
          <div className={`flex flex-col space-y-8 py-10 bg-gray-900 text-gray-200 px-10 ${footerClassName}`}>
            {typeof footer === "object" && "content" in footer && "copyright" in footer ? (
              <>
                <div className="flex flex-col overflow-hidden space-y-8 sm:space-x-4 sm:space-y-0 sm:flex-row">
                  {footer.content}
                </div>
                <div>{footer.copyright}</div>
              </>
            ) : (
              <>{footer}</>
            )}
          </div>
        )}
      </div>
    </>
  );
});

export default PublicLayout;
