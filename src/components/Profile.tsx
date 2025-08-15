import React from "react";
import Text from "./commons/Text";
import { useMediaQuery } from "react-responsive";

export default function Profile() {
    const name = "David Wilfred E. Tuazon";
    const describe = "Aspiring Full-stack Developer";
    const intro = 
        "I am a final-year Mathematics student with a specialization in Computer Science, on the verge of completing my thesis and final major. "
        + "With the flexibility to work full-time, I am eager to leverage my analytical and programming skills to contribute as a full-stack developer, "
        + "while continuously expanding my expertise in building scalable and innovative web applications."

    const isBigScreen = useMediaQuery({ minWidth: 768 });

    return (
        <div>
            <div style={styles.profile}>
                <Text
                    style={{
                        padding: 5,
                        margin: 5,
                        fontSize: isBigScreen ? '2.5vw' : '6vw'
                    }}
                    variant='heading'
                >
                    {name}
                </Text>
                <Text 
                    style={{
                        padding: 5,
                        margin: 5,
                        fontSize: isBigScreen ? '1.5vw' : '4vw'
                    }}
                    variant='subheading'
                >
                    {describe}
                </Text>
                <div style={styles.introduction}>
                    <Text 
                        style={{
                            textAlign: 'justify',
                            padding: isBigScreen ? 5 : 0,
                            fontSize: isBigScreen ? '1.5vw' : '3vw'
                        }}
                        variant='title'
                    >
                        {intro}
                    </Text>
                </div>
             </div>
        </div>
    );
}

const styles: {[key: string]: React.CSSProperties} = {
    profile: {
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    introduction: {
        // border: '1px solid red',
        width: '70%',
    },
}