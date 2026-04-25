import { useState } from "react";
import { Input } from "./ui/input";
import { Eye, EyeOff } from "lucide-react";

export default function InputPassword({ field }: { field: any }) {
    const [show, setShow] = useState(false);

    return (
        <div className="relative">
            <Input
                id="password"
                type={show ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
                {...field}
            />

            <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
            >
                {show ? <EyeOff className="text-gray-600" size={18} /> : <Eye className="text-gray-600" size={18} />}
            </button>
        </div>
    )
}