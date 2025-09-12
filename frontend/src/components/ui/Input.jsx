import { cn } from "../../lib/utils"; 
export function Input({icon: Icon, className, ...props}) {
    return(
        <div className="flex items-center gap-2 bg-surface-dark w-[440px] h-[58px] rounded-lg rubik-medium ">
            {Icon && <Icon className="ml-4 w-6 h-6 text-muted" />}
            <input
            className={cn(
                "bg-transparent outline-none flex-1 placeholder:text-muted text-xl text-muted rubik-medium",
                className
            )}
            {...props}
            />
        </div>
    );
}

export default Input;