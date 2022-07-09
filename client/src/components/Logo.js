export default function Logo({ imgSrc, text }) {
  return (
    <div className="flex items-center gap-3">
      <img src={imgSrc} alt="jobhuntly" className="w-7 h-7" />
      <h1 className="text-sm tracking-wide font-bold">{text}</h1>
    </div>
  );
}
