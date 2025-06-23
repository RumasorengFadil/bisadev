import React, { ComponentType, ReactNode } from "react";

// Tipe untuk komponen pembungkus dan spinner
interface WithLoadingOptions {
  SpinnerWithLabel?: ComponentType;
  Overlay?: ComponentType;
  LoadingWrapper?: ComponentType<{ children: ReactNode }>;
}

// Tipe props tambahan yang akan ditambahkan ke komponen
interface WithLoadingProps {
  isLoading: boolean;
}

// Fungsi HOC
const withLoading = ({
  SpinnerWithLabel,
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
              {SpinnerWithLabel && <SpinnerWithLabel />}
            </div>
          </LoadingWrapper>
        );
      }
      return <WrappedComponent {...(props as P)} />;
    };
  };

export default withLoading;
