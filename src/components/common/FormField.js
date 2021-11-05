import { useEffect, useRef } from "react/cjs/react.development";


const FormField = ({className, label, ...props}) => {
    
    const ref = useRef(null)
    
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
    
    return (
        <div>
            <label>
                <span>{label}</span>
                <input
                    autoComplete="off"
                    {...props}
                    ref={ref}>

                </input>
            </label>
        </div>
     );
}
 
export default FormField;