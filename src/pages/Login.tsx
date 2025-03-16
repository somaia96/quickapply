import { Toaster } from "../components/ui/toaster";
import instance from "../api/instance";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../hooks/use-toast";
import Toast from '../components/Toast';
import Input from "../components/Input";
import { useForm, SubmitHandler } from "react-hook-form"
import { useMutation } from "@tanstack/react-query";
import { Button } from "../components/ui/button";

interface IUser {
    email: string,
    password: string,
}

const Login = () => {
    const { register, handleSubmit } = useForm<IUser>()
    let navigate = useNavigate();
    const { toast } = useToast();
    const storeToken = (token: string) => {
        localStorage.setItem('tokenPOS', token);
    };

    const { mutate, isSuccess, isError, data } = useMutation({
        mutationFn: (user: IUser) => {
            return instance.post('/login', user);
        }
    });
    useEffect(() => {
        if (isSuccess) {
            storeToken(data.data.access_token);
            setTimeout(() => {
                navigate("/")
            }, 2000);
            Toast("You Have Successfully Logged In 👏", "default", toast, "bg-blue-100");
        }
        if (isError) {
            Toast("Incorrect Email Or Password ✖", "destructive", toast);
        }
    }, [isSuccess, isError, toast]);

    const onSubmit: SubmitHandler<IUser> = user => {
        mutate(user)
    };

    return (
        <div className="h-screen flex container items-center justify-center">
            <div className="flex rounded-lg w-full sm:w-1/2">
                <Toaster />
                <form className='w-full bg-white p-10 space-y-5 rounded-xl'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2 className='font-bold text-3xl text-center text-primary mb-5'>LogIn</h2>
                    <Input placeholder="Email Or UserName" register={register} name="email" type="email" />
                    <Input placeholder="Password" register={register} name="password" type="password" />
                    <Button className="w-full bg-primary hover:bg-primary/90">
                        LogIn
                    </Button>
                    <p className="text-sm text-secondary">You Don't Have Account ? <Link className="text-primary" to={"/signin"}>SignIn</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login
