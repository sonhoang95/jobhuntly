import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { Alert, FormRow } from "../../components";

const Profile = () => {
  const { isLoading, user, updateUser, showAlert, displayAlert } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="text-2xl lg:text-3xl mb-3 lg:mb-6 font-semibold tracking-wide">
          Profile
        </h3>
        {showAlert && <Alert />}
        <div className="grid lg:grid-cols-3 gap-4 capitalize items-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="text"
            name="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 rounded-lg text-white capitalize h-[42px] hover:bg-blue-800 transition-colors duration-200 ease-linear"
          >
            {isLoading ? "Please wait..." : "Save changes"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Profile;
