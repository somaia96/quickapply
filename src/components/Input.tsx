import { Input as Inputs } from "./ui/input"

interface IProps {
  name: string;
  register?: any;
  type?: string;
  placeholder?:string;
}

const Input = ({ placeholder,type, name, register }: IProps) => {
  return (
    <div className="flex items-center justify-between" >
      
      <div className="rounded-md w-full">
        <Inputs
        className="focus-visible:ring-primary h-11 bg-background shadow-double-inner"
          // {...register(name)}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={name}
        />
      </div>
    </div>
  )
}

export default Input
