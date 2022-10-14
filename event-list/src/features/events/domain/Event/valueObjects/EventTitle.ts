import { NotNullValueObject } from "../../Shared/valueObjects/NotNull.valueObject";

export class EventTitle extends NotNullValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
