import cls from './Modal.module.scss'
import classNames from "classnames";
import {ReactNode, useCallback, useRef, MutableRefObject, useState, MouseEvent, useEffect} from "react";
import {Box} from "@mui/joy";
import {ModalOverlayStyles} from "../model/styles/modalOverlay";

interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
    children: ReactNode;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {className, isOpen, onClose, children} = props;
    const [isClosing, setClosing] = useState<boolean>(false);
    const [isMounted, setMounted] = useState(false);
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout> | null>;

    const modes = {
        [cls['opened']]: isOpen,
        [cls['is-closing']]: isClosing
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setClosing(true);
            timeRef.current = setTimeout(() => {
                onClose()
                setClosing(false);
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    }

    useEffect(() => {
        if (isOpen) {

            setMounted(true)
            document.body.style.overflow = "hidden";
        }

        return () => {
            setMounted(false);
            document.body.style.overflow = "auto"
        }
    }, [isOpen]);

    if (!isMounted) return null

    return (
        <Box className={classNames(cls['modal'], className, modes)} onClick={closeHandler}>
            <Box className={cls['modal-overlay']} sx={ModalOverlayStyles}>
                <Box className={cls['modal-overlay-content']} onClick={onContentClick}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}