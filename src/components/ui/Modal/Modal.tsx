import { X } from "lucide-react";
import styles from "./Modal.module.scss";
import { Dialog } from "radix-ui";

interface IProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Modal({ isOpen, setIsOpen }: IProps) {
  return (
    <Dialog.Root open={isOpen} defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title />
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
