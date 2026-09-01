interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} mb-12`}>
      {eyebrow && (
        <span className={`heading-eyebrow ${light ? '!text-secondary-400' : ''}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`heading-2 ${light ? '!text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`text-body-lg mt-4 ${light ? '!text-white/70' : ''}`}>{subtitle}</p>
      )}
    </div>
  );
}
