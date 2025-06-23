import { useState } from "react";
import axios from "axios";

type Errors<T> = Partial<Record<keyof T, string>>;

export function useForm<T extends Record<string, any>>(initialValues: T) {
    const [data, setData] = useState<T>(initialValues);
    const [errors, setErrors] = useState<Errors<T>>({});
    const [loading, setLoading] = useState(false);

    const updateField = <K extends keyof T>(key: K, value: T[K]) => {
        setData(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    const reset = () => {
        setData(initialValues);
        setErrors({});
    };

    const submit = async (
        method: "post" | "put" | "patch" | "delete" | "get",
        url: string,
        options?: {
            onSuccess?: (res: any) => void;
            onError?: (errors: Errors<T>) => void;
        }
    ) => {
        setLoading(true);
        setErrors({});

        try {
            await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
            const response = await axios({
                method,
                url,
                data,
                withCredentials: true, // opsional, jika pakai Sanctum
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            options?.onSuccess?.(response.data);
        } catch (error: any) {
            console.log(error);
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
                options?.onError?.(error.response.data.errors);
            } else {
                console.error("Unexpected error:", error);
            }
        } finally {
            setLoading(false);
        }
    };

    return {
        data,
        setData: updateField,
        reset,
        errors,
        loading,
        submit,
    };
}
