export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col md:flex-row md:overflow-hidden">
        <div className="bg-background grow flex flex-row items-center justify-center p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}