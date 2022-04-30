import { useRef, useState } from "react";

interface DragDropType {
  draggable?: boolean;
  onStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onUploadFile?: (data: any) => void;
  onEnterZone?: (e: React.DragEvent<HTMLDivElement>) => void;
  onOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onLeaveZone?: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const useDragDrop = ({
  draggable = false,
  onStart,
  onUploadFile,
  onEnterZone,
  onOver,
  onLeaveZone,
}: DragDropType) => {
  const elRef: React.MutableRefObject<null> = useRef(null);

  const [isDropZone, setIsDropZone] = useState<boolean>(false);
  const [isUpload, setIsUpload] = useState<boolean>(false);

  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsUpload(false);
    onStart?.(e);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onUploadFile?.(e.dataTransfer?.files);
    setIsDropZone(false);
    setIsUpload(true);
  };

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDropZone(true);
    setIsUpload(false);
    onEnterZone?.(e);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsUpload(false);
    onOver?.(e);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDropZone(false);
    setIsUpload(false);
    onLeaveZone?.(e);
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

