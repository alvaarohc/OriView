import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-primary p-6">
      <div className="flex items-center gap-3">
        <Image
        className='rounded-lg'
          src="oriview-logo.svg"
          alt="OriView Logo"
          width={50}
          height={50}
        />
        <h1 className='text-2xl font-black text-text'>OriView</h1>
      </div>
    </header>
  );
}
