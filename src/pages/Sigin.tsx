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
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

const Signin = () => {
    const { register, handleSubmit, reset } = useForm<IUser>()
    let navigate = useNavigate();
    const { toast } = useToast();
    const storeToken = (token: string) => {
        localStorage.setItem('tokenPOS', token);

    };

    const { mutate, isSuccess, isError, data } = useMutation({
        mutationFn: (user: IUser) => {
            return instance.post('/register', user);
        }
    });
    useEffect(() => {
        if (isSuccess) {
            setInterval(() => {
                storeToken(data.data.access_token);
            }, data.data.expires_in);
            storeToken(data.data.access_token);
            setTimeout(() => {
                navigate("/")
            }, 2000);
            Toast("You Have Successfully Sign In 👏", "default", toast, "bg-blue-100");
            reset();
        }
        if (isError) {
            Toast("Something Went Wrong ✖", "destructive", toast);
        }
    }, [isSuccess, isError, toast, reset]);

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
                    <h2 className='font-bold text-3xl text-center text-primary mb-5 text-blue-gray-400'>SignIn</h2>
                    <Input placeholder="Name" register={register} name="name" />
                    <Input placeholder="Email" register={register} name="email" type="email" />
                    <Input placeholder="Password" register={register} name="password" type="password" />
                    <Input placeholder="Confirm Password" register={register} name="c_password" type="password" />
                    <Button className="w-full bg-primary hover:bg-primary/90">
                        SignIn
                    </Button>
                    <p className="text-sm text-secondary">Do You Have Account ? <Link className="text-primary" to={"/login"}>LogIn</Link></p>

                </form>
            </div>
        </div>
    )
}

export default Signin
