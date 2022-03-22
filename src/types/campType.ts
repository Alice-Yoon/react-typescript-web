export type CampType = 'popular' | 'sale'

export interface Camp {
  id: number;
  name: string;
  type: CampType;
  status: string;
  field: string;
  skill: string;
  startDate: string;
  thumbnail: string;
}
