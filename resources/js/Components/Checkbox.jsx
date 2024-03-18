export default function Checkbox({ className = '', ...props }) {
    return (
    <label>
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-black-300 text-black shadow-sm focus:ring-indigo-500' +
                className
            }
        />
        Relembrar senha
    </label>
    );
}
