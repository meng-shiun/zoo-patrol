/**
  * CardKeyValue is used for Card component to print info to Card
**/
export class CardKeyValue {
  static create(title: string, child: string) {
    return {'title': title, 'child': child };
  }
}
