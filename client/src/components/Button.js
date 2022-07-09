import { Link } from "react-router-dom";

export default function Button({ title, variant, url }) {
  let btnVariant;

  if (variant === "register") {
    btnVariant = "bg-orange-500 px-8 py-3 hover:bg-orange-600";
  } else if (variant === "login") {
    btnVariant = "bg-blue-600 px-6 py-2 hover:bg-blue-700";
  } else {
    btnVariant = null;
  }
  return (
    <Link
      to={url}
      className={`text-sm tracking-wide capitalize rounded text-white ${btnVariant} transition-colors duration-300`}
    >
      {title}
    </Link>
  );
}
