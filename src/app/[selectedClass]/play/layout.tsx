import Heading from '@/app/_components/layout/Heading';
import type { ReactNode } from 'react';
import IdentityProvider from '@/context/IdentityContext';

export default function PlayLayout({
  children,
  currentHand,
  discardedCards,
  lostCards,
  selectedCards,
  activeEffects,
}: {
  children: ReactNode;
  currentHand: ReactNode;
  discardedCards: ReactNode;
  lostCards: ReactNode;
  selectedCards: ReactNode;
  activeEffects: ReactNode;
}) {
  return <div className='h-full p-2 flex flex-col-reverse lg:flex-row justify-center'>
    <Heading title='Play your cards' />

    <IdentityProvider>
      <div className='h-full p-2 m-2 flex flex-col items-center gap-4'>
        {currentHand}
        {discardedCards}
        {lostCards}
      </div>

      <div className='h-full p-2 m-2 flex flex-col items-center gap-4'>
        {children}
        {selectedCards}
        {activeEffects}
      </div>
    </IdentityProvider>
  </div>;
}