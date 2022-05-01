import { useRef, useState, ClipboardEvent, useEffect } from "react";

interface ClipBoardType {
  copyValue?: (data: any) => void;
  pasteValue?: (data: any) => void;
  cutValue?: (data: any) => void;
}

export const useClipboard = ({
  copyValue,
  pasteValue,
  cutValue,
}: ClipBoardType) => {
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const [isCut, setIsCut] = useState<boolean>(false);
  const [isPaste, setIsPaste] = useState<boolean>(false);
  const elRef: React.MutableRefObject<null> | any = useRef(null);


  const readWriteData = (e: any, eventName: string) => {
    e.preventDefault();
    eventName !== "paste" && localStorage.removeItem("text/plain");

    const selection = document.getSelection();
    eventName !== "paste" &&
      e.clipboardData.setData("text/plain", selection?.toString());

    let clipboardValue = e.clipboardData.getData("text/plain");

    eventName === "cut" && selection?.deleteFromDocument();

    let clickCopyText = localStorage.getItem("text/plain");

    if (clickCopyText) {
      return clickCopyText;
    }

    return clipboardValue;
  };

  const onClick = (e: any) => {
    if (elRef.current.localName === "input") return;
    let copyClickText = elRef.current.outerText;
    localStorage.setItem("text/plain", copyClickText);

    copyValue?.({ copyClickText });
    setIsCopy(true);
    setIsPaste(false);
    setIsCut(false);
  };

  const onCopy = (e: ClipboardEvent) => {
    let copyText = readWriteData(e, "copy");
    copyValue?.({ copyText });
    setIsCopy(true);
    setIsPaste(false);
    setIsCut(false);
  };

  const onPaste = (e: ClipboardEvent) => {
    let pasteText = readWriteData(e, "paste");

    pasteValue?.({ pasteText });
    setIsCopy(false);
    setIsCut(false);
    setIsPaste(true);
    localStorage.removeItem("text/plain");
  };

  const onCut = (e: ClipboardEvent) => {
    let cutText = readWriteData(e, "cut");
    cutValue?.({ cutText });
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
