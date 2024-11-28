import { ICampaign } from "../models/campaign";

export const campaigns: ICampaign[] = [
  { "id": 1, "name": "Campaign 1", "keywords": ["keyword1"], "bid": 10, "fund": 100, "status": "on", "town": "Kyiv", "radius": 5 },
  { "id": 2, "name": "Campaign 2", "keywords": ["keyword2"], "bid": 15, "fund": 200, "status": "off", "town": "Lviv", "radius": 10 }
]