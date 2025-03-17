'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

type BreadcrumbProps = {
  replacement?: string;
};

export default function Breadcrumb({ replacement }: BreadcrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div className="flex items-center gap-2">
      {pathNames.map((link, index) => {
        let href = '/' + pathNames.slice(0, index + 1).join('/');
        return (
          <div key={link} className="flex gap-2 items-center">
            <Link className="flex text-xl" href={href}>
              <p
                className={`capitalize text-text/75 ${clsx({
                  'font-bold text-text/100': paths === href,
                })}`}
              >
                {
                  // If replacement is present and is the last part of the breadcrumb
                  replacement && index === pathNames.length - 1
                    ? replacement
                    : link
                }
              </p>
            </Link>
            {index !== pathNames.length - 1 && <p className="text-2xl">\</p>}
          </div>
        );
      })}
    </div>
  );
}
