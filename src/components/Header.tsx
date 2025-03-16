import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="bg-background py-32">
    <div className="container flex">
    <div className="flex-1 space-y-5">
      <h2 className="text-secondary text-4xl">Streamline your job application</h2>
      <h3 className="text-primary text-3xl">process with smart efficiency</h3>
      <p className="text-secondary text-lg leading-10 w-4/5">We to empower job seekers to apply for positions more effectively contributing to the realization of their professional ambitions</p>
      <Button className="bg-primary text-lg" size={"lg"}>
          start now
      </Button>
    </div>
    <div className="w-2/5">
      <img className="w-full h-auto" src="images/1.png" alt="header" />
    </div>
    </div>
  </header>
  )
}

export default Header
