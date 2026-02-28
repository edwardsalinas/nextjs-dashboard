// import {} from '../app/ui/global.css';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en" className={`${inter.className} antialiased`}>
      <body>
        <h1>Hola Edward Salinas</h1>
        {children}
      </body>
    </html>
  );
}
