import React, { useState, useEffect, useCallback } from "react";
import { contactForm } from "../services/api";
import Button from "./commons/Button";
import Text from "./commons/Text";
import TextInput from "./commons/TextInput";
import TextArea from "./commons/TextArea";
import { mustNotBeEmptyOrSpace, mustBeValidEmail } from "../utils/validators";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { throttle } from 'lodash';
import MessagePrompt from "./commons/MessagePrompt";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

type Inputs = {
    name: string,
    email: string,
    message: string
}

type StatusType = 'idle' | 'loading' | 'success' | 'error';

export default function EmailModal({ isOpen, onClose}: Props) {
    const isBigScreen = useMediaQuery({ minWidth: 768 });
    const [status, setStatus] = useState<StatusType>('idle');
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

    const handleClose = () => {
        setStatus('idle');
        reset();
        onClose();
    }
    
    const onSubmit: SubmitHandler<Inputs> = useCallback(
        throttle(async (data) => {
            console.log("form data: ", data);
            setStatus('loading');

            try {
                const payload = {
                    name: data.name,
                    email: data.email,
                    message: data.message
                };

                const res = await contactForm(payload);
                if (res.success) {
                    setStatus('success');
                } else {
                    setStatus('error');
                }
            } catch (e: any) {
                console.error({ message: "Failed to send message"}, e);
                setStatus('error');
            throw e;
            }

        }, 2000, { trailing: true }),
    [setStatus]);

    if (!isOpen) return null;

    return (
        <div style={styles.overlay} onClick={() => status !== 'loading' ? handleClose() : null}>
            {status === 'idle' && (
            <div style={Object.assign({}, styles.modal, !isBigScreen && styles.smallscreenModal)} onClick={(e) => e.stopPropagation()}>
                <div style={styles.header}>
                    <Text variant="heading" style={{fontSize: isBigScreen? '1.7vw' : '4.5vw'}}>
                    Send me a message.
                </Text>
                <Button title="x" onButtonPress={handleClose} 
                    style={styles.button} 
                />
                </div>
                <TextInput 
                    textProps={{
                        placeholder: 'Company Name/Full Name',
                        ...register("name", {
                            validate: {
                                mustNotBeEmptyOrSpace
                            }
                        })
                    }}
                    error={errors.name?.message}
                />
                <TextInput
                    textProps={{
                        placeholder: 'Company/Your Email',
                        ...register("email", {
                            validate: {
                                mustNotBeEmptyOrSpace,
                                mustBeValidEmail
                            }
                        })
                    }}
                    error={errors.email?.message}
                />
                <TextArea
                    textProps={{
                        placeholder: "What do you wanna tell me?",
                        ...register("message", {
                            validate: {
                                mustNotBeEmptyOrSpace
                            }
                        })
                    }}
                    error={errors.message?.message}
                />
                <Button 
                    title='Send'
                    onButtonPress={handleSubmit(onSubmit)} 
                    disabled={status !== 'idle'}
                    style={{...styles.submit, left: isBigScreen ? '64%' : '60%'}}
                 />
            </div>
            )}

            {status !== 'idle' && (
                <MessagePrompt Status={status} SetStatus={setStatus} />
            )}

        </div>
    );
}

const styles: {[key: string]: React.CSSProperties} = {
    overlay: {
        // border: '1px solid black',
        position: 'fixed' as const,
        top: 0,
        left: 0, 
        width: '100%', 
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'hidden',
    },
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