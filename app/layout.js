import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rtr Portfolio',
  description: 'Created by RTR',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        
        <script type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "msxmxt1reu");
          `}
        </script>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
