export const Input = ({ placeholder, type="text", onChange, style }) => {
    return <input type={type} placeholder={placeholder} onChange={onChange} className={`text-lg font-serif font-bold bg-primary-500 py-2 outline-none border-b-4 border-secondary-500 w-full h-fit placeholder:text-secondary-500 placeholder:opacity-50 ${style}`}/>
}