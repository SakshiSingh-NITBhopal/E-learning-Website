export default function InfoCard({ title, titleColor, description }) {
  return (
    <>
      <h3 className={`text-xl font-semibold mb-4 ${titleColor}`}>
        {title}
      </h3>
      <p className="text-muted text-lg">{description}</p>
    </>
  );
}
