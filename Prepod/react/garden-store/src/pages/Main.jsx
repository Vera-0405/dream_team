import { MainBanner } from "../components/MainBanner";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { Text } from "../components/Text";
import { TestForm } from "../components/TestForm";

export const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <div>
            <TestForm/>
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <Text/>
            </Modal>
            <MainBanner/>
            <button onClick={toggleModal}>toggle modal</button>
        </div>
    )
};