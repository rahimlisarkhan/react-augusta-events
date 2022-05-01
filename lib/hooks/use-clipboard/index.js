"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClipboard = void 0;
const react_1 = require("react");
const useClipboard = ({ copyValue, pasteValue, cutValue, }) => {
    const [isCopy, setIsCopy] = (0, react_1.useState)(false);
    const [isCut, setIsCut] = (0, react_1.useState)(false);
    const [isPaste, setIsPaste] = (0, react_1.useState)(false);
    const elRef = (0, react_1.useRef)(null);
    const readWriteData = (e, eventName) => {
        e.preventDefault();
        eventName !== "paste" && localStorage.removeItem("text/plain");
        const selection = document.getSelection();
        eventName !== "paste" &&
            e.clipboardData.setData("text/plain", selection === null || selection === void 0 ? void 0 : selection.toString());
        let clipboardValue = e.clipboardData.getData("text/plain");
        eventName === "cut" && (selection === null || selection === void 0 ? void 0 : selection.deleteFromDocument());
        let clickCopyText = localStorage.getItem("text/plain");
        if (clickCopyText) {
            return clickCopyText;
        }
        return clipboardValue;
    };
    const onClick = (e) => {
        if (elRef.current.localName === "input")
            return;
        let copyClickText = elRef.current.outerText;
        localStorage.setItem("text/plain", copyClickText);
        copyValue === null || copyValue === void 0 ? void 0 : copyValue({ copyClickText });
        setIsCopy(true);
        setIsPaste(false);
        setIsCut(false);
    };
    const onCopy = (e) => {
        let copyText = readWriteData(e, "copy");
        copyValue === null || copyValue === void 0 ? void 0 : copyValue({ copyText });
        setIsCopy(true);
        setIsPaste(false);
        setIsCut(false);
    };
    const onPaste = (e) => {
        let pasteText = readWriteData(e, "paste");
        pasteValue === null || pasteValue === void 0 ? void 0 : pasteValue({ pasteText });
        setIsCopy(false);
        setIsCut(false);
        setIsPaste(true);
        localStorage.removeItem("text/plain");
    };
    const onCut = (e) => {
        let cutText = readWriteData(e, "cut");
        cutValue === null || cutValue === void 0 ? void 0 : cutValue({ cutText });
        setIsCut(true);
        setIsCopy(false);
        setIsPaste(false);
    };
    const boards = {
        onCopy,
        onPaste,
        onCut,
        onClick,
    };
    return { elRef, boards, isCopy, isCut, isPaste };
};
exports.useClipboard = useClipboard;
//# sourceMappingURL=index.js.map