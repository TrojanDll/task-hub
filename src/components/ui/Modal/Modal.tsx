import Substrate from "../Substrate/Substrate";
import styles from "./Modal.module.scss";
import { X } from "lucide-react";
import { Dialog } from "radix-ui";
import type { PropsWithChildren } from "react";

interface IProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Modal({
  isOpen,
  setIsOpen,
  children
}: PropsWithChildren<IProps>) {
  return (
    <Dialog.Root
      open={isOpen}
      defaultOpen
    >
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={() => setIsOpen(false)}
          className={styles.overlay}
        />
        <Dialog.Content className={styles.content}>
          <Dialog.Title />
          <Substrate className={styles.substrate}>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>

            {children}
          </Substrate>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
