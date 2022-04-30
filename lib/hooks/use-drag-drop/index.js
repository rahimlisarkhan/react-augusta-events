"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDragDrop = void 0;
const react_1 = require("react");
const useDragDrop = ({ draggable = false, onStart, onUploadFile, onEnterZone, onOver, onLeaveZone, }) => {
    const elRef = (0, react_1.useRef)(null);
    const [isDropZone, setIsDropZone] = (0, react_1.useState)(false);
    const [isUpload, setIsUpload] = (0, react_1.useState)(false);
    const onDrag = (e) => {
        e.preventDefault();
        setIsUpload(false);
        onStart === null || onStart === void 0 ? void 0 : onStart(e);
    };
    const onDrop = (e) => {
        var _a;
        e.preventDefault();
        onUploadFile === null || onUploadFile === void 0 ? void 0 : onUploadFile((_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.files);
        setIsDropZone(false);
        setIsUpload(true);
    };
    const onDragEnter = (e) => {
        e.preventDefault();
        setIsDropZone(true);
        setIsUpload(false);
        onEnterZone === null || onEnterZone === void 0 ? void 0 : onEnterZone(e);
    };
    const onDragOver = (e) => {
        e.preventDefault();
        setIsUpload(false);
        onOver === null || onOver === void 0 ? void 0 : onOver(e);
    };
    const onDragLeave = (e) => {
        e.preventDefault();
        setIsDropZone(false);
        setIsUpload(false);
        onLeaveZone === null || onLeaveZone === void 0 ? void 0 : onLeaveZone(e);
    };
    let listening = {
        draggable,
        onDrag,
        onDrop,
        onDragEnter,
        onDragOver,
        onDragLeave,
    };
    return { elRef, isDropZone, isUpload, listening };
};
exports.useDragDrop = useDragDrop;
//# sourceMappingURL=index.js.map