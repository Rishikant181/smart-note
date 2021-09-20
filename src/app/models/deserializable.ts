// An interface for deining deserializable classes

export interface Deserializable {
    deserialize(data: any): this;
}