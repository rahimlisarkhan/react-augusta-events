/// <reference types="react" />
interface DragDropType {
    draggable?: boolean;
    onStart?: (e: React.DragEvent<HTMLDivElement>) => void;
    onUploadFile?: (data: any) => void;
    onEnterZone?: (e: React.DragEvent<HTMLDivElement>) => void;
    onOver?: (e: React.DragEvent<HTMLDivElement>) => void;
    onLeaveZone?: (e: React.DragEvent<HTMLDivElement>) => void;
}
export declare const useDragDrop: ({ draggable, onStart, onUploadFile, onEnterZone, onOver, onLeaveZone, }: DragDropType) => {
    elRef: import("react").MutableRefObject<null>;
    isDropZone: boolean;
    isUpload: boolean;
    listening: {
        draggable: boolean;
        onDrag: (e: React.DragEvent<HTMLDivElement>) => void;
        onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
        onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
        onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
        onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
    };
};
export {};
//# sourceMappingURL=index.d.ts.map