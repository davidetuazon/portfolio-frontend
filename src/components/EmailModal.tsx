import React, { useState, useEffect } from "react";
import { contactForm } from "../services/api";
import Button from "./commons/Button";
import Text from "./commons/Text";
import TextInput from "./commons/TextInput";
import TextArea from "./commons/TextArea";
import { mustNotBeEmptyOrSpace, mustBeValidEmail } from "../utils/validators";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

type Inputs = {
    name: string,
    email: string,
    message: string
}

export default function EmailModal({ isOpen, onClose}: Props) {
    const isBigScreen = useMediaQuery({ minWidth: 768 });
    const [status, setStatus] = useState<string | null>(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

    if (!isOpen) return null;

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log('form data: ', data);

        try {
            let payload: {
                name: string,
                email: string,
                message: string
            } = {
                name: data.name,
                email: data.email,
                message: data.message
            }

            await contactForm(payload);

        } catch (e: any) {
            setStatus("Failed to send message");
            throw(e);
        }
    }

    return (
        <div style={styles.overlay}>
            <div style={Object.assign({}, styles.modal, !isBigScreen && styles.smallscreenModal)}>
                <div style={styles.header}>
                    <Text variant="heading" style={{fontSize: isBigScreen? '1.2vw' : '4.5vw'}}>
                    Send me a message.
                </Text>
                <Button title="x" onButtonPress={onClose} style={{...styles.button, left: isBigScreen ? '45%' : '17%' }} />
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
                        placeholder: 'Email',
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
                <Button title="Submit" onButtonPress={handleSubmit(onSubmit)} style={{...styles.submit, left: isBigScreen ? '64%' : '60%'}} />
                
                {/* {status && <p>{status}</p>} */}
            </div>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        background: '#f4f4f4',
        padding: '2rem',
        borderRadius: '10px',
        width: '30%',
        height: '90%',
        position: 'relative' as const,
    },
    smallscreenModal: {
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        background: '#f4f4f4',
        borderRadius: '10px',
        width: '70%',
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