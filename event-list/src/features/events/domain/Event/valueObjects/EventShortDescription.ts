import { NotNullValueObject } from "../../Shared/valueObjects/NotNull.valueObject";

export class EventShortDescription extends NotNullValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
