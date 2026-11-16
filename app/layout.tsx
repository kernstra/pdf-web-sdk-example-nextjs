import type { Metadata } from 'next';
import './app.css';

export const metadata: Metadata = {
  title: 'Kernstra PDF Web SDK · Next.js example',
  description:
    'Next.js (App Router) example for the Kernstra PDF Web SDK: view, annotate, edit and fill PDFs in the browser.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>
        <div className="app">{children}</div>
      </body>
    </html>
  );
}
