import { type Card } from './cards.type';

export type Identity = number;

export enum FrosthavenClassNames {
  BannerSpear = 'Banner Spear',
  Blinkblade = 'Blinkblade',
  Boneshaper = 'Boneshaper',
  Deathwalker = 'Deathwalker',
  Deepwraith = 'Deepwraith',
  Drifter = 'Drifter',
  FrozenFist = 'Frozen Fist',
  Geminate = 'Geminate',
  CrashingTide = 'Crashing Tide',
  Hive = 'Hive',
  Infuser = 'Infuser',
  MetalMosaic = 'Metal Mosaic',
  PainConduit = 'Pain Conduit',
  Pyroclast = 'Pyroclast',
  Snowdancer = 'Snowdancer',
  Trapper = 'Trapper',
}

export type FrosthavenClass<X extends Card> = {
  name: FrosthavenClassNames;
  handSize: number;
  path: string;
  iconSize: { width: number; height: number };
  cards: X[];
}
