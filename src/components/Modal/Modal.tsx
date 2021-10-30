import React, { useCallback, useLayoutEffect } from "react";
import { Button as BaseButton } from "reakit/Button";
import {
  useDialogState,
  DialogDisclosure,
  DialogBackdrop,
  Dialog
} from "reakit/Dialog";
import { Button } from "../Button";
import { Backdrop, Container } from "./elements";
import { isRenderFunction } from "../../utils";

export interface ModalProps
  extends Partial<React.ComponentProps<typeof Button>> {
  label?: React.ReactNode;
  ariaLabel?: string;
  as?: React.ElementType;
  backdrop?: React.ElementType;
  container?: React.ElementType;
  animated?: boolean;
  animating?: boolean;
  alert?: boolean;
  trapFocus?: boolean;
  hideOnClickOutside?: boolean;
  onClose?: () => void;
  children:
    | ((props: {
        open: boolean;
        toggleOpen: () => void;
        stopAnimation: () => void;
      }) => React.ReactNode)
    | React.ReactNode;
}

export const Modal: React.FC<ModalProps> = React.forwardRef<
  typeof Button,
  ModalProps
>(
  (
    {
      label,
      ariaLabel,
      as = Button,
      backdrop = Backdrop,
      container = Container,
      animated = false,
      animating = false,
      alert = false,
      trapFocus = true,
      hideOnClickOutside = true,
      onClick = (): void => {},
      onClose = (): void => {},
      children,
      ...props
    },
    ref
  ) => {
    const dialog = useDialogState({ modal: trapFocus, animated });

    useLayoutEffect(() => {
      if (!animating) {
        dialog.stopAnimation();
      }
    }, [dialog, animating]);

    const handleToggle: React.MouseEventHandler = useCallback(
      (e) => {
        dialog.toggle();
        onClick(e);
      },
      [dialog, onClick]
    );

    const handleHide = useCallback((): void => {
      dialog.hide();
      onClose();
    }, [dialog, onClose]);

    return (
      <>
        <DialogDisclosure {...dialog}>
          {(disclosureProps): React.ReactElement => (
            <BaseButton
              {...disclosureProps}
              {...props}
              onClick={handleToggle}
              as={as}
              ref={ref}
            >
              {label}
            </BaseButton>
          )}
        </DialogDisclosure>
        <DialogBackdrop {...dialog} as={backdrop}>
          <Dialog
            {...dialog}
            as={container}
            role={alert ? `alertdialog` : `dialog`}
            aria-label={ariaLabel}
            hideOnClickOutside={hideOnClickOutside}
            hide={handleHide}
          >
            {children &&
            isRenderFunction(children) &&
            React.isValidElement(children)
              ? children({
                  open: dialog.visible,
                  toggleOpen: dialog.toggle,
                  stopAnimation: dialog.stopAnimation
                })
              : children}
          </Dialog>
        </DialogBackdrop>
      </>
    );
  }
);

Modal.displayName = `Modal`;
