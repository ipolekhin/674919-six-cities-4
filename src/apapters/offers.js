import {Ratings} from "../const";

const adapterOffer = (offer) => {
  return ({
    adults: offer.max_adults,
    townName: offer.city.name,
    bedrooms: offer.bedrooms,
    cardName: offer.title,
    cardRating: offer.rating,
    cardRatingStars: Ratings[Math.round(offer.rating) - 1],
    cardType: offer.type,
    coordinatesItem: [offer.location.latitude, offer.location.longitude],
    description: offer.description,
    favoritePlace: offer.is_favorite,
    id: offer.id,
    image: offer.preview_image,
    images: offer.images,
    insideItems: offer.goods,
    premiumPlace: offer.is_premium,
    price: offer.price,
    user: {
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      pro: offer.host.is_pro,
    },
    reviews: [
      {
        date: new Date(20, 3, 15),
        id: offer.id,
        rating: offer.rating,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        userAvatar: `img/avatar-max.jpg`,
        userName: `Max`,
      }
    ],
  });
};

const adapterOffers = (offers) => {
  return (offers.map((offer) => adapterOffer(offer)));
};

export {adapterOffers};
