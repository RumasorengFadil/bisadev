import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import Spinner from "../components/Spinner";
import withLoading from "../components/WithLoading";

/**
 * `ButtonWithLoading` is a reusable button component enhanced with a loading indicator,
 * created using the `withLoading` higher-order component (HOC).
 *
 * When `isLoading` is set to `true`, the button displays a spinner (to the left of the label)
 * and becomes disabled to prevent user interaction during asynchronous operations.
 *
 * @example
 * ```tsx
 * <ButtonWithLoading isLoading={true}>
 *   Save
 * </ButtonWithLoading>
 * ```
 *
 * @remarks
 * - Internally combines the `Button` component as a wrapper and `Spinner` for loading feedback.
 * - Useful in forms or any place where an action triggers async processing.
 *
 * @returns A `Button` component with built-in loading behavior.
 */
const ButtonFull = ({children}:{children:ReactNode}) => {
  return <Button className="w-full">{children}</Button>;

}
const ButtonWithLoading = withLoading({
  LoadingWrapper: ButtonFull,
  Spinner,
})(Button)


export default ButtonWithLoading;
