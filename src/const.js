export const CARD_TYPES = [
  `Apartment`,
  `Room`,
  `House`,
  `Hotel`,
];

export const Ratings = [`20%`, `40%`, `60%`, `80%`, `100%`];

export const TownType = {
  AMSTERDAM: `Amsterdam`,
  BRUSSELS: `Brussels`,
  COLOGNE: `Cologne`,
  DUSSELDORF: `Dusseldorf`,
  HAMBURG: `Hamburg`,
  PARIS: `Paris`,
};

export const TOWN_NAMES = [
  TownType.AMSTERDAM,
  TownType.BRUSSELS,
  TownType.COLOGNE,
  TownType.DUSSELDORF,
  TownType.HAMBURG,
  TownType.PARIS,
];

export const TownCoordinates = {
  [TownType.AMSTERDAM]: [52.38333, 4.9],
  [TownType.BRUSSELS]: [52.38333, 4.9],
  [TownType.COLOGNE]: [52.38333, 4.9],
  [TownType.DUSSELDORF]: [52.38333, 4.9],
  [TownType.HAMBURG]: [52.38333, 4.9],
  [TownType.PARIS]: [52.38333, 4.9],
};

export const OfferCardsClassesType = {
  MAIN_CONTAINER: `cities__place-card`,
  OFFER_CONTAINER: `near-places__card`,
};
