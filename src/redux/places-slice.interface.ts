interface PlaceProps {
  id: number;
  name: string;
  image: string;
  description: string;
  visited: boolean;
}

interface PlacesStateProps {
  places: PlaceProps[];
  loading: boolean;
}

export type { PlaceProps, PlacesStateProps };
