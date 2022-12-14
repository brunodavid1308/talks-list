


export abstract class ValueObject<T> {

    public readonly value: T;

    constructor(value: T) {
        this.value = value;
    }

    public equals(vo?: ValueObject<T>): boolean {
        if (vo === null || vo === undefined) {
            return false;
        }

        if (this === vo) {
            return true;
        }

        return this.value === vo.value;
    }
}