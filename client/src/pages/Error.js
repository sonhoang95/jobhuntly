import notFoundImage from "../assets/images/404.svg";
import { Button } from "../components";

export default function Error() {
  return (
    <main>
      <div className="max-w-[650px] mx-auto -mt-12">
        <img src={notFoundImage} alt="not found" />
      </div>
      <div className="text-center -mt-16 text-xl capitalize">
        <h3 className="mb-6">
          We can't seem to find the page you're looking for
        </h3>
        <Button title="back home" url="/landing" variant="login" />
      </div>
    </main>
  );
}
