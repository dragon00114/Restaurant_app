import { AnimatePresence } from 'framer-motion';


import { UploadProps } from '../types';



export default function MultiFilePreview({ thumbnail, files }: UploadProps) {
  if (!files?.length) {
    return null;
  }

  return (
    <AnimatePresence initial={false} />
  );
}
