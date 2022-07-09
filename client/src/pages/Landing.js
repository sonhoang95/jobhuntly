import heroImage from "../assets/images/heroImage.svg";
import { Button, Navbar } from "../components";

export default function Landing() {
  return (
    <>
      <Navbar showLoginBtn={true} />
      <main className="w-full max-w-[1200px] mx-auto px-6 lg:px-0 mt-24">
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-0 items-center lg:ml-16">
          <div>
            <h1 className="text-[1.65rem] lg:text-4xl font-bold leading-tight capitalize text-gray-800">
              One step closer to your new job.
            </h1>
            <p className="my-6 text-gray-500 text-sm leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, commodi aspernatur expedita molestias molestiae
              ratione.
            </p>
            <Button
              title={
                <>
                  Get Started <span className="ml-4">&rarr;</span>
                </>
              }
              variant="register"
              url="/register"
            />
          </div>
          <div>
            <img
              src={heroImage}
              alt="dashboard illustration"
              className="min-w-[600px]"
            />
          </div>
        </div>
      </main>
    </>
  );
}
