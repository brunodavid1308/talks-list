import { NotNullValueObject } from "../../Shared/valueObjects/NotNull.valueObject";
import { DomainDate } from "../../Shared/valueObjects/DomainDate";

export interface EventDateProps {
  init: DomainDate;
  end: DomainDate;
}

export class EventDate extends NotNullValueObject<EventDateProps> {
  constructor(value: EventDateProps) {
    super(value);
  }

  public getInit(): DomainDate {
    return this.value.init;
  }

  public getEnd(): DomainDate {
    return this.value.end;
  }
}
