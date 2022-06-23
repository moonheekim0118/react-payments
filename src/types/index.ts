export type TCard =
  | '롯데카드'
  | '삼성카드'
  | 'NH농협카드'
  | '신한카드'
  | '현대카드'
  | '하나카드'
  | 'BC카드'
  | 'KB국민카드';

export type TInputScale = 'large' | 'medium' | 'small';

export type TApiMethod = 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'POST';

export interface TCardInfo {
  firstCardNumber: string;
  secondCardNumber: string;
  thirdCardNumber: string;
  fourthCardNumber: string;
  expiredMonth: string;
  expiredYear: string;
  cardType: TCard;
  ownerName: string;
}
