export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>this is a secondary layout!</h2>
      {children}
    </div>
  );
}
