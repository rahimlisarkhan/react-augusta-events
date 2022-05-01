import { ClipboardEvent } from "react";
interface ClipBoardType {
    copyValue?: (data: any) => void;
    pasteValue?: (data: any) => void;
    cutValue?: (data: any) => void;
}
export declare const useClipboard: ({ copyValue, pasteValue, cutValue, }: ClipBoardType) => {
    elRef: any;
    boards: {
        onCopy: (e: ClipboardEvent) => void;
        onPaste: (e: ClipboardEvent) => void;
        onCut: (e: ClipboardEvent) => void;
        onClick: (e: any) => void;
    };
    isCopy: boolean;
    isCut: boolean;
    isPaste: boolean;
};
export {};
//# sourceMappingURL=index.d.ts.map