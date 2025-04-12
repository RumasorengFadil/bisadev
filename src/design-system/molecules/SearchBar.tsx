import { FaSearch } from "react-icons/fa";
import TextInput from "../components/TextInput";

export default function SearchBar({
    onChange,
}: {
    size?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {

    // const sizes = {
    //     "sm": {
    //         width: "w-40",
    //         padding: "py-1"
    //     },
    //     'md': {
    //         width: "w-60",
    //         padding: "py-2"
    //     },
    //     'lg': {
    //         width: "w-80",
    //         padding: "py-3"
    //     },
    // }[size];
    
    return (
        <div className={"flex px-4 justify-between items-center"}>
            <div className="flex relative shadow-sm">
                <FaSearch
                    className="absolute z-10 text-gray-400 h-full left-4"
                    size={16}
                />
                <TextInput
                    className={`pl-10 text-xs w-40 md:w-60 py-2  placeholder-gray-400`}
                    type="text"
                    placeholder="Cari Artikel"
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
