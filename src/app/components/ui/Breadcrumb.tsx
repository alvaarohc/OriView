'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

export default function Breadcrumb() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div className="flex items-center gap-2">
      {pathNames.map((link, index) => {
        let href = '/' + pathNames.slice(0, index + 1).join('/');
        return (
          <div className="flex gap-2 items-center">
            <Link className="flex text-xl" href={href}>
              <p
                className={`capitalize text-text/75 ${clsx({
                  'font-bold text-text/100': paths === href,
                })}`}
              >
                {link}
              </p>
            </Link>
            {index !== pathNames.length - 1 && (
              <p className='text-2xl'>\</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
