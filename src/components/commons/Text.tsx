import React from "react";

type Props = {
    style?: React.CSSProperties,
    children: any,
    variant: 'heading' | 'subheading' | 'title',
};

export default function Text(props: Props) {
    const {
        style,
        variant ='text',
        children
    } = props;

    const getVariantStyle = () => {
        switch (variant) {
            case 'heading':
                return styles.heading;
            case 'subheading':
                return styles.subheading;
            case 'title':
                return styles.title;
        }
    }

    return (
        <div 
            style={styles.container}
        >
            <p style={ Object.assign({}, getVariantStyle(), style) }>
                {children}
            </p>
        </div>
    );
}

const styles: {[key: string]: React.CSSProperties} = {
    container: 
    {
        // border: '1px solid red',
    },
    heading: {
        fontSize: '2.2vw',
        textAlign: 'center',
        fontFamily: 'Poppins-Black',
    },
    subheading: {
        fontSize: '1.7vw',
        textAlign: 'center',
        fontFamily: 'Poppins-Black',
    },
    title: {
        fontSize: '1.2vw',
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
    },
}