import {useCallback, useState} from "react";
import {Modal} from "shared/ui/Modal";
import {Burger} from "widgets/Burger";
import {NavbarItems} from "entities/Navbar";

export const BurgerMenu = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const onToggle = () => setOpen(prevOpen => !prevOpen);
    const onClose = useCallback(() => setOpen(false), []);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} className={'burger-navbar'}>
                <NavbarItems className={"burger-navbar-links-container"}/>
            </Modal>
            <Burger onToggle={onToggle} isOpen={isOpen} isInverted/>
        </>
    )
}