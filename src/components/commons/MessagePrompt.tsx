import React, { SetStateAction } from "react";
import Text from "./Text";

type StatusType = 'idle' | 'loading' | 'success' | 'error';

type Props = {
    Status: string,
    SetStatus: React.Dispatch<SetStateAction<StatusType>>,
}

export default function MessagePrompt(props: Props) {
    const getMessage = (status: string) => {
        switch (status) {
            case 'loading':
                return "Sending your message... 🚀 Hang tight!";
            case 'success':
                return "Thank you for messaging me. I'll get back to you shortly. 😊";
            case 'error': 
                return "Oops! Something wen't wrong. Please try again.";
        }
    }

    return (
        <>
            <div style={styles.modal}>
                <Text variant="heading">
                    {getMessage(props.Status)}
                </Text>
            </div>
        </>
    );
}

const styles: {[key: string]: React.CSSProperties} = {
    modal: {
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f4f4f4',
        // margin: 10,
        padding: 30,
        borderRadius: '12px',
        width: '30%',
        position: 'relative' as const,
        overflowY: 'auto',
    },
    smallscreenModal: {
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f4f4f4',
        borderRadius: '10px',
        width: '70%',
        maxWidth: '70%',
        height: '89%',
        position: 'relative' as const,
    },
    button: {
        width: '7.5%',
        padding: 10,
        borderRadius: 12,
        alignContent: 'center',
        position: 'relative',
        // left: '45%',
    },
    header: {
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    submit: {
         width: '30%',
        padding: 10,
        borderRadius: 12,
        alignContent: 'center',
        position: 'relative',
        // left: '64%'
    }
};