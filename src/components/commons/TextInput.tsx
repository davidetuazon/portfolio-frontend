import React, { CSSProperties } from "react";
import colors from "../../constants/colors";
import Text from "./Text";
type Props = {
    style?: React.CSSProperties,
    textStyle?: React.CSSProperties,
    textProps?: any,
    error?: string
}

export default function TextInput(props: Props) {
    return (
        <>
            <div style={Object.assign(
                {},
                styles.container,
                props.error? styles.errorContainer: {},
                props.style
                )}>
                    <input 
                        style={{...styles.textInput}}
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
}

const styles: {[key: string]: React.CSSProperties} = {
    container: {
        backgroundColor: colors.white,
        border: '2px solid #0066FF',
        borderRadius: 12,
        paddingLeft: 15,
        paddingRight: 15,
        height: 45,
        marginBottom: 10,
        marginTop: 10,
  },
    errorContainer: {
        border: '2px solid red',
  },
    textInput: {
        border: 'none',
        backgroundColor: 'transparent',
        width: '100%',
        outline: 'none',
        height: 'inherit',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
  },
    errorLabel: {
        // border: '1px solid red',
        marginTop: 10,
        color: 'red',
        fontWeight: 'bold',
        fontSize: 10,   
  }
}