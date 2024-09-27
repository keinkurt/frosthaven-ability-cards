import BoardArea from '@/app/_components/BoardArea';
import DiscardedCards from './DiscardedCards';

export default function DiscardedCardsPage() {
  return <BoardArea title='Discarded cards'>
    <DiscardedCards />
  </BoardArea>;
}