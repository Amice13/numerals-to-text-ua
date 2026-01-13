interface Match {
    start: number;
    end: number;
    word: string;
}
declare const extractNumbers: (text: string) => Match[];
declare const parseNumber: (input: string) => number;

export { extractNumbers, parseNumber };
