import type { Card } from '@/domain/cards.type';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';
import Image from 'next/image';

export default function ClassIcon({
  fhClass,
}: {
  fhClass: FrosthavenClass<Card>;
}) {
  const { name, path, iconSize } = fhClass;
  return <Image src={path} alt={name} {...iconSize} />;
}