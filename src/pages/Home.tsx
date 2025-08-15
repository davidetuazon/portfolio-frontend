import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import colors from '../constants/colors';
import Text from '../components/commons/Text';

import Profile from '../components/Profile';
import Portfolio from '../components/Portfolio';

export default function Home() {
    const isBigScreen = useMediaQuery({ minWidth: 768 });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const viewResume = async () => {
        window.open(`${process.env.REACT_APP_API_URL}/api/david/resume`, 'blank');
    };
    
    return (

        <div style={{
            ...styles.root,
        }}>
            <div style={styles.notif}>
                <Text style={{padding: 5, margin: 5}} variant="subheading">
                    NOTICE: This portfolio is still under construction.
                </Text>
            </div>
            <div style={styles.content}>
                <Profile />
                <Portfolio viewResume={viewResume} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />   
            </div>
        </div>
    );
}

const styles: {[key: string]: React.CSSProperties} = {
    root: {
        //  border: '1px solid black',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: colors.secondary,
        height: '100%',
        width: '100%',
        backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)',
        // zIndex: 1,
    },
    content: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
        width: '80%',
        background: 'rgba(255, 255, 255, .85)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '18px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
    },
    notif: {
        // border: '1px solid red',
        position: 'absolute',
        bottom: 10,
        width: '40%',
        background: 'rgba(255, 255, 255, .85)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '18px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
    }
}