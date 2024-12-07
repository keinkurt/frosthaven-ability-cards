'use client';

import { CardStatus, type Card } from '@/domain/cards.type';
import { useCards } from '@/app/[selectedClass]/play/useCards';
import CardPile from '@/app/_components/cards/CardPile';
import { use } from 'react';
import { ClassContext } from '@/context/ClassContext';

export default function DiscardedCards() {
  const fhClass = use(ClassContext);
  const {
    currentCards,
    recoverCard,
    loseCard,
  } = useCards();

  const discardPile = currentCards
    .filter(({ status }) => status === CardStatus.discarded);

  const actions = (card: Card) => [{
    name: 'Recover Card',
    onClick: () => recoverCard(card),
  }, {
    name: 'Lose Card',
    onClick: () => loseCard(card),
  }];

  return <CardPile
    cards={discardPile}
    actions={actions}
    maxCardLength={fhClass.handSize}
  />;
}