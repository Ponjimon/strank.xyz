import '../styles/global.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
};

export default RootLayout;
