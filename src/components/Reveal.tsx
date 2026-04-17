"use client";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={className}
      style={{
        animation: `fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
      }}
    >
      {children}
    </div>
  );
}
