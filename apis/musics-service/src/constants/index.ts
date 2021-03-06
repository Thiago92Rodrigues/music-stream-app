export const AlbumsTable = 'albums';
export const ArtistsTable = 'artists';
export const MusicsTable = 'musics';

export const AscendingOrder = 'asc';
export const DescendingOrder = 'desc';

export enum Genre {
  'Heavy Metal' = 1,
  'Folk Metal',
  'Power Metal',
  'Death Metal',
  'Thrash Metal',
  'Black Metal',
}

export enum StatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
