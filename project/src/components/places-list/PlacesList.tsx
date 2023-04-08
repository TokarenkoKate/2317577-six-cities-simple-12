import { Offers } from '../../types/offers';
import PlaceCard from '../place-card/PlaceCard';

type PlacesListProps = {
  offers: Offers;
  onListItemHover: (selectedOfferId: number | undefined) => void;
};

function PlacesList({ offers, onListItemHover }: PlacesListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          onListItemHover={onListItemHover}
          key={offer.id}
        />
      ))}
    </div>
  );
}

export default PlacesList;
