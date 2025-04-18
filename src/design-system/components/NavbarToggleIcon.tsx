import { MouseEventHandler } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export const NavbarToggleIcon = ({ onClick = () => { }, toggle }: { onClick?: MouseEventHandler<SVGAElement>, toggle: boolean }) => {
    return (
        toggle
            ? <IoClose
                className={`cursor-pointer text-white sm:hidden`}
                size={24}
                onClick={onClick}
            />
            : <IoMenu
                className={`cursor-pointer text-white sm:hidden`}
                size={24}
                onClick={onClick}
            />
    )
}