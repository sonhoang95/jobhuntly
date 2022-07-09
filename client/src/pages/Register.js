import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signUpImage from "../assets/images/signUp.svg";
import { Alert, FormRow, Navbar } from "../components";
import { useAppContext } from "../context/AppContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export default function Register() {
  const [values, setValues] = useState(initialState);

  // global state and useNavigate
  const navigate = useNavigate();

  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!name && !isMember)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };

    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toggleMemberStatus = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <>
      <Navbar />
      <main className="w-full max-w-[1200px] mx-auto lg:px-6 px-0 mt-24">
        <div className="grid lg:grid-cols-2 gap-6 shadow-md rounded-lg">
          <div className="lg:p-6">
            <img src={signUpImage} alt="sign up" />
          </div>
          <div className="p-6 mt-12">
            {showAlert && <Alert />}
            <h2 className="text-3xl font-bold tracking-wide">
              {values.isMember ? "Login." : "Get started."}
            </h2>
            <p className="mt-3 mb-4 text-gray-500 text-sm tracking-wide">
              {values.isMember ? "Not a member yet?" : "Already a member?"}{" "}
              <button
                className="text-orange-500 underline font-bold"
                onClick={toggleMemberStatus}
              >
                {values.isMember ? "Register" : "Login"}
              </button>
            </p>
            <form onSubmit={handleSubmit}>
              {!values.isMember && (
                <FormRow
                  name="name"
                  type="text"
                  value={values.name}
                  labelText="Name"
                  handleChange={handleChange}
                />
              )}
              <FormRow
                name="email"
                type="email"
                value={values.email}
                labelText="Email address"
                handleChange={handleChange}
              />
              <FormRow
                name="password"
                type="password"
                value={values.password}
                labelText="Password"
                handleChange={handleChange}
              />

              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 disabled:bg-blue-900 disabled:text-slate-300 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {values.isMember ? "Login" : " Register"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
