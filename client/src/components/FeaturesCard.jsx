export default function FeatureCard({ icon: Icon, iconColor, title, description }) {
  return (
    <>
      <Icon className={`h-12 w-12 ${iconColor} mx-auto mb-4`} />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted text-lg">{description}</p>
    </>
  );
}
