import { NotNullValueObject } from "../../Shared/valueObjects/NotNull.valueObject";

export class EventLocation extends NotNullValueObject<string> {
  constructor(value: string) {
    super(value);
  }

  public getCity(): string {
    return this.value;
  }
}
