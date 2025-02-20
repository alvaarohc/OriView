import { IconLayoutSidebarLeftCollapseFilled } from '@tabler/icons-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <header className="flex flex-col bg-secondary-dark p-10">
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-black">Dashboard</h1>
          <button type="button" className='cursor-pointer'>
            <IconLayoutSidebarLeftCollapseFilled size={36} />
          </button>
        </div>
        <nav></nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
