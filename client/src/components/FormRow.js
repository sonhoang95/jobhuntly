export default function FormRow({
  type,
  name,
  value,
  labelText,
  handleChange,
}) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <label htmlFor="name" className="text-gray-700 text-sm">
        {labelText || name}
      </label>
      <input
        className="border border-gray-400 p-2 rounded-lg"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
