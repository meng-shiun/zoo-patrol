/**
  * CardKeyValue is used for Card component to print info to Card
**/
export class CardKeyValue {
  static create(title: string, child: string, subParam1?: string, subParam2?: string) {
    return {'title': title, 'child': child, 'subParam1': subParam1, 'subParam2': subParam2 };
  }
}
