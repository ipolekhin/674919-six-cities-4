export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const CARD_TYPES = [
  `Apartment`,
  `Room`,
  `House`,
  `Hotel`,
];

export const errorMessageList = {
  '400': `Сервер не понимает запрос из-за неверного синтаксиса.`,
  '404': `Сервер не может найти запрашиваемый ресурс.`,
  'undefined': `Сервер не отвечает.`,
};

export const FIVE_STAR = [5, 4, 3, 2, 1];

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

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW: `Price: low to high`,
  PRICE_HIGH: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

export const SORT_NAMES = [
  SortType.POPULAR,
  SortType.PRICE_LOW,
  SortType.PRICE_HIGH,
  SortType.TOP_RATED_FIRST,
];

export const valid = {
  MIN_LENGTH_REVIEW: 5,
  // MIN_LENGTH_REVIEW: 50,
  MAX_LENGTH_REVIEW: 300,
  TEXT_WRONG: `Текст отзыва должен содержать от 50 до 300 символов.`,
};
