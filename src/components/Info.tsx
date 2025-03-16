import Input from "./Input"
import { Button } from "./ui/button"

const Info = () => {
    return (
        <div className="container py-10 flex">
            <div className="flex-1">
                <img className="w-full h-auto" src="images/2.png" alt="form" />
            </div>
            <div className="flex-1 flex items-center">
                <form className="p-5 bg-background space-y-5 w-4/5 m-auto rounded-lg shadow-md">
                    <div className="flex items-center flex-1 justify-start space-x-1">
                        <img className="w-8" src="images/logo.png" alt="logo" />
                        <h2 className="text-lg font-semibold text-secondary text-start w-full">
                            QuickApply
                        </h2>
                    </div>
                    <Input name="email" placeholder="Enter email or username" />
                    <Input name="edu" placeholder="Education (Degree, University)" />
                    <Input name="exp" placeholder="Experience (Companies, Positions)" />
                    <Input name="skills" placeholder="Skills" />
                    <Input name="position" placeholder="Target Position/Job" />
                    <Input name="cv" placeholder="Upload your resume as a file." />
                    <Button className="bg-primary rounded-full w-4/5 text-lg flex m-auto" size={"lg"}>next</Button>
                </form>
            </div>
        </div>
    )
}

export default Info
