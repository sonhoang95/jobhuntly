import { useAppContext } from "../context/AppContext";

export default function Alert() {
  const { alertType, alertText } = useAppContext();
  return (
    <div
      className={`w-full py-1 capitalize text-sm tracking-wide text-center rounded-lg mb-4 ${
        alertType === "error"
          ? "bg-red-300 text-red-900"
          : "bg-green-300 text-green-900"
      }`}
    >
      {alertText}
    </div>
  );
}
