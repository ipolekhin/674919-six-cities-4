export const CARD_TYPES = [
  `Apartment`,
  `Room`,
  `House`,
  `Hotel`,
];

export const MapProps = {
  ICON_SIZE: [27, 39],
  ICON_URL: `img/pin.svg`,
  ICON_ACTIVE_URL: `img/pin-active.svg`,
  ZOOM: 12,
};

export const OfferCardsClassesType = {
  MAIN_CONTAINER: `cities__place-card`,
  OFFER_CONTAINER: `near-places__card`,
};

export const Ratings = [`20%`, `40%`, `60%`, `80%`, `100%`];

export const STARS_PROPERTY = [`terribly`, `badly`, `not bad`, `good`, `perfect`];

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
  [TownType.AMSTERDAM]: [52.374, 4.889],
  [TownType.BRUSSELS]: [50.850, 4.348],
  [TownType.COLOGNE]: [50.933, 6.950],
  [TownType.DUSSELDORF]: [51.221, 6.776],
  [TownType.HAMBURG]: [53.575, 10.015],
  [TownType.PARIS]: [48.853, 2.348],
};
