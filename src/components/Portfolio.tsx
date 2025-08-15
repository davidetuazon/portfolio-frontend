import React from "react";
import Text from "./commons/Text";
import Button from "./commons/Button";
import { useNavigate } from "react-router-dom";
import EmailModal from "./EmailModal";
import { useMediaQuery } from "react-responsive";

type Props = {
    viewResume: () => void,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isModalOpen: boolean,
}

export default function Portfolio(props: Props) {
    const isBigScreen = useMediaQuery({ minWidth: 768 });
    const navigate = useNavigate()

    return (
        <div>
            <div style={styles.container}>
                <div style={Object.assign({}, styles.buttons, !isBigScreen && styles.smallButtons)}>
                    <Button
                        title="Email me"
                        onButtonPress={() => props.setIsModalOpen(prev => !prev)}
                    />
                    <EmailModal isOpen={props.isModalOpen} onClose={() => props.setIsModalOpen(false)} />
                    <Button
                        title="Resume"
                        onButtonPress={() => props.viewResume()}
                    />
                    <Button
                        title="Projects"
                        onButtonPress={() => navigate('/projects')}
                    />
                </div>
            </div>
        </div>
    );
}

const styles: {[key: string]: React.CSSProperties} = {
    container: {
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'row',
    },
    smallButtons: {
        // border: '1px solid red',
        // display: 'flex',
        // flexDirection: 'column',
    }
}