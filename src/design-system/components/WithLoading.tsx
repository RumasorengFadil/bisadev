import React, { ComponentType, ReactNode } from "react";

// Tipe untuk komponen pembungkus dan spinner
interface WithLoadingOptions {
  Spinner?: ComponentType;
  Overlay?: ComponentType;
  LoadingWrapper?: ComponentType<{ children: ReactNode }>;
}

// Tipe props tambahan yang akan ditambahkan ke komponen
interface WithLoadingProps {
  isLoading: boolean;
}

// Fungsi HOC
const withLoading = ({
  Spinner,
  Overlay,
  LoadingWrapper = ({ children }: { children: ReactNode }) => <div>{children}</div>,
}: WithLoadingOptions) =>
  function <P extends object>(
    WrappedComponent: ComponentType<P>
  ): ComponentType<P & WithLoadingProps> {
    return function EnhancedComponent({ isLoading, ...props }: WithLoadingProps & P) {
      if (isLoading) {
        return (
          <LoadingWrapper>
            <div className="relative flex items-center justify-center w-full h-full">
              {Overlay && <Overlay />}
              {Spinner && <Spinner />}
            </div>
          </LoadingWrapper>
        );
      }
      return <WrappedComponent {...(props as P)} />;
    };
  };

export default withLoading;
