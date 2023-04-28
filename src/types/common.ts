enum TitleSize {
    MAX = 1,
    EXTRA = 2,
    MEDIUM = 3,
    REGULAR  = 4,
    SMALL = 5,
    MIN = 6,
}

enum BgSize {
    AUTO ='auto',
    COVER = 'cover',
    CONTAIN = 'contain',
}

type ViewType = 'primary' | 'secondary' | 'thirdy';

export { TitleSize, BgSize };
export type { ViewType };