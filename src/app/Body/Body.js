'use client'
import Topbar from './TopBar';
import MainContent from './MainContent';

export default function Home() {
  // useClient();
  return (
    <div>
      <Topbar status="waiting" />
      <main className="p-10 bg-gray-100 min-h-screen">
        <MainContent />
      </main>
    </div>
  );
}
