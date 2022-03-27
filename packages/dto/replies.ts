export interface AddKeywordReply {
    code: number;
    message: string;
}

export interface RemoveKeywordReply {
    code: number;
    message: string;
}

export interface SearchKeywordReply {
    code: number;
    message: string;
    exists: boolean;
}

export interface ListKeywordReply {
    code: number;
    message: string;
    keywords: string[];
}

export interface SuggestKeywordReply {
    code: number;
    message: string;
    keywords: string[];
}