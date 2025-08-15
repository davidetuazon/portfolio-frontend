import React from "react";
import colors from "../../constants/colors";
import { useMediaQuery } from "react-responsive";

type Props = {
    style?: React.CSSProperties,
    title: string | String,
    onButtonPress?: () => void,
    disabled?: boolean
}
export default function Button(props: Props) {
  const isBigScreen = useMediaQuery({ minWidth: 768 }); 

   let {
    style,
    title,
    onButtonPress,
    disabled = false
   } = props;

    return (
        <div style={Object.assign(
            {}, 
            styles.container,
            style, 
            props.disabled && styles.disabled, 
            !isBigScreen && styles.smallScreen
          )}
            onClick={onButtonPress}
        >
            <p style={Object.assign(
                {},
                styles.title,
                !isBigScreen && styles.smallText
              )}>
                {title}
            </p>
        </div>
    );
}

const styles: {[key: string]: React.CSSProperties} = {
    container: {
    // border: '2px solid black',
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 23,
    margin: 10,
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  },
  title: {
    margin: 0,
    fontSize: '1.5vw',
    textAlign: 'center',
    fontFamily: 'Poppins-Black',
    color: colors.white,
  },
  disabled: {
    pointerEvents: 'none',
    backgroundColor: 'white'
  },
  smallScreen: {
    // border: '3px solid red',
    background: colors.primary,
    padding: 7, margin: 7,
    borderRadius: 12,
  },
  smallText: {
    fontSize: '4vw',
  }
}