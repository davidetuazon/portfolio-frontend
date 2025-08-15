import React from "react";
import Text from "./Text";
import colors from "../../constants/colors";

type Props = {
    style?: React.CSSProperties,
    textStyle?: React.CSSProperties,
    textProps?: any,
    error?: string
}

export default function TextArea(props: Props) {
    return (
        <>
            <div
                style={Object.assign(
                    {},
                    styles.container,
                    props.error? styles.errorContainer: {},
                    props.style
                )}
            >
                <textarea 
                    style={{...styles.textArea}}
                    {...props.textProps}
                />
            </div>
             {
                props.error && 
                    <Text 
                        variant='title' 
                        style={styles.errorLabel}
                    >
                        *{props.error}
                    </Text>
            }
        </>
    );
};

const styles: {[key: string]: React.CSSProperties} = {
    container: {
        background: colors.white,
        border: '2px solid #0066FF',
        borderRadius: 12,
        paddingLeft: 15,
        paddingRight: 5,
        height: 250,
        marginBottom: 10,
        marginTop: 10,
  },
    errorContainer: {
        border: '2px solid red',
  },
    textArea: {
        border: 'none',
        backgroundColor: 'transparent',
        width: '100%',
        outline: 'none',
        height: 'inherit',
        boxSizing: 'border-box',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        resize: 'none',
        overflowY: 'auto',
        paddingTop: 10,
      },
    errorLabel: {
        // border: '1px solid red',
        marginTop: 10,
        color: 'red',
        fontWeight: 'bold',
        fontSize: 10,   
  }
}