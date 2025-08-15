import React from "react";
import Text from "./commons/Text";
import Button from "./commons/Button";
import colors from "../constants/colors";

type Project = {
    id: number,
    caption: string,
    description: string,
    title: string,
    tech: []
}

type Props = {
    isBigScreen: boolean,
    projects: Project[],
    selected: Project[],
    setSelected: React.Dispatch<React.SetStateAction<Project[]>>;
}

export default function SmallNavigation(props: Props) {
    return (
        <>
            <div style={{
                ...styles.root,
                alignItems: props.isBigScreen ? "none" : "flex-start",
                justifyContent: props.isBigScreen ? "none" : "center",
                }}
            >
                <div style={styles.navigation}>
                    <div style={styles.header}>
                        <Text variant="heading" style={{ fontSize: props.isBigScreen ? "2vw" : "6vw" }}>
                            Projects
                        </Text>
                    </div>
                    {props.projects.map(p => (
                        <div key={p.id} style={styles.titles}>
                            <Button 
                                style={styles.button} 
                                title={p.title} 
                                onButtonPress={() => props.setSelected(
                                    props.projects.filter((project) => project.id === p.id)
                                )}
                            />
                        </div>
                    ))}
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
    container: {
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'row',
    },
    navigation: {
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowY: 'auto',
        direction: 'rtl',
        position: 'relative'
    },
    header: {
        // border: '1px solid red',
        backgroundColor: colors.secondary,
        color: colors.white,
        width: '100%',
        position: 'sticky',
        top: 0,
    },
    titles: {
        // border: '1px solid blue',
        justifyItems: 'center',
    },
    button: {
        width:'300px',
        backgroundColor: colors.primary,
        // margin: 10,
    },
}