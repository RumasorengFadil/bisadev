import PrimaryButton from "./Button";
import { FaWhatsappSquare } from "react-icons/fa";

export const WhatsappButton = () => {
    return (
        <PrimaryButton className="flex-1 space-x-2 bg-white h-max text-black w-max">
            <FaWhatsappSquare className="text-green-500" size={24} />
            <p>Chat Admin</p>
        </PrimaryButton>
    )
}