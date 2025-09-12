import { cn } from "../../lib/utils"; 
export function Input({icon: Icon, className, ...props}) {
    return(
        <div className="flex items-center gap-2 bg-surface-dark w-[320px] h-[40px] rounded-md rubik-medium ">
            {Icon && <Icon className="ml-2 w-5 h-5 text-muted" />}
            <input
            className={cn(
                "bg-transparent outline-none flex-1 placeholder:text-muted text-md text-muted rubik-medium",
                className
            )}
            {...props}
            />
        </div>
    );
}

export default Input;