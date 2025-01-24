export default function InputLabel({ value, className = "", children, htmlFor="" }:{value?:string, children?:React.ReactNode, className?:string, htmlFor?:string}) {
    return (
        <label htmlFor={htmlFor} className={`block font-medium text-sm text-gray-700 dark:text-gray-300 ` + className}>
            {value ? value : children}
        </label>
    );
}
