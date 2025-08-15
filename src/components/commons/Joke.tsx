import React from "react";
import colors from "../../constants/colors";
import Text from "./Text";

type Props = {
    isBigScreen: boolean,
}

export default function Joke(props: Props) {
    return (
        <>
            <div style={{...styles.root, alignItems: props.isBigScreen ? "none" : "center"}}>
                <div style={styles.container3}>
                    <div style={styles.jokeContainer}>
                        <Text variant="heading" 
                            style={{
                                fontSize: props.isBigScreen ? '2vw' : '6vw',
                                // border: '1px solid red',
                            }}
                        >
                            Go to desktop.
                        </Text>
                        <Text variant="title" 
                            style={{
                                fontSize: props.isBigScreen ? '2vw' : '3.5vw',
                                padding: 10, margin: 10,
                                // border: '1px solid red',
                            }}
                        >
                            I didn't have time for mobile responsiveness, I have a life.
                        </Text>

                        <Text variant="title"
                            style={{
                                fontSize: props.isBigScreen ? '2vw' : '1.5vw',
                                padding: 10, margin: 10,
                                // border: '1px solid red',
                            }}
                        >
                            *If you can't take a joke, go back to homepage and read the notice :)*
                        </Text>
                    </div>
                </div>
            </div>
        </>
    );
}

const styles: {[key: string]: React.CSSProperties} = {
    root: {
        backgroundColor: colors.secondary,
        display: 'flex',
        flexDirection: 'row',
        height: '100dvh',
        flex: 1,
        overflow: 'hidden'
    },
    container3: {
        // border: '1px solid blue',
        display: 'flex',
        flex: 1,
    },
    jokeContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '12px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
    }
}