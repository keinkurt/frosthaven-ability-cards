import type { Card } from '../cards.type';
import { FrosthavenClassNames, type FrosthavenClass } from '../frosthaven-class.type';
import { metalMosaicCards } from './cards';

export type MetalMosaicPressure = 'low' | 'regular' | 'high' | 'over';
export const pressures: MetalMosaicPressure[] = ['regular', 'high', 'over', 'low'] as const;

export function isMetalMosaic(fhClass: FrosthavenClass<Card>): boolean {
  return fhClass.name === FrosthavenClassNames.MetalMosaic;
}

export const metalMosaic: FrosthavenClass<Card> = {
  name: FrosthavenClassNames.MetalMosaic,
  handSize: 9,
  path: '/metal-mosaic/icons/fh-metal-mosaic-color-icon.svg',
  iconSize: { width: 412, height: 600 },
  cards: metalMosaicCards,
};
