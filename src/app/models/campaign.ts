export interface ICampaign {
  id: number,
  name: string,
  keywords: string[],
  bid: number,
  fund: number,
  status: string,
  town: string,
  radius: number
}