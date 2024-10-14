'use client';

import type { Card } from '@/domain/cards.type';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';
import { useFrosthavenStore } from '@/stores/cards.store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SelectClass({
  fhClass,
}: {
  fhClass: FrosthavenClass<Card>;
}) {
  const router = useRouter();
  const selectClass = useFrosthavenStore((state) => state.selectClass);

  const { name, path, iconSize } = fhClass;

  return (<button
    className='border-0 flex items-center justify-center'
    onClick={() => {
      selectClass(fhClass);
      router.push('/select');
    }}>
    <Image src={path} alt={name} {...iconSize} />
  </button>)
}