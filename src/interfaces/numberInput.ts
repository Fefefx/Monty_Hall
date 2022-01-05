export default interface NumberInput {
    text: string;
    value: number;
    onChange: (newValue: number) => void
}