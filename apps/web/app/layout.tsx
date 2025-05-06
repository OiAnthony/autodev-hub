import "@workspace/ui/globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Providers } from "@/components/layouts/dashboard/providers";
import DashboardLayout from "@/components/layouts/dashboard";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased `}
      >
        <Providers>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </Providers>
      </body>
    </html>
  );
}
