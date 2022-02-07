import { Thumbnail } from "./thumbnail.model"

export interface CharactersResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: CharacterDataContainer;
  etag: string;
}

export interface CharacterDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
  }

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: any;
  resourceURI: string;
  urls:Url[];
  thumbnail: Thumbnail;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
  }

interface Url{
type: string;
url: string;
}

interface Image {
  path?: string;
  extension?:string;
}

interface ComicList{
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: ComicSummary[];
}

interface ComicSummary {
  resourceURI?: string;
  name?: string
}

interface StoryList {
  available?: string;
  returned?: string;
  collectionURI?: string;
  items?: StorySummary[];
}

interface StorySummary {
  resourceURI?: string;
  name?:string;
  type?: string;
}

interface EventList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: EventSummary[];
}

interface EventSummary {
  resourceURI?: string;
  name?: string
}

interface SeriesList {
  available?: number;
  collectionURI?: string;
  items?: SeriesSummary[]
}

interface SeriesSummary {
  resourceURI?: string;
  name?: string;
}
