import React from "react";
import Text from "./commons/Text";
import Button from "./commons/Button";
import colors from "../constants/colors";

import ProjectList from "./ProjectList";

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
                <div>
                    {props.selected?.length ? (
                        <>
                            <div style={styles.overlay} onClick={(e) => props.setSelected([])}>
                                <div style={styles.projectModal} onClick={(e) => e.stopPropagation()}>
                                    <ProjectList isBigScreen={props.isBigScreen} selected={props.selected} />
                                </div>
                            </div>
                        </>
                    ) : null }
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
        flex: 1,
        height: '100%',
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
        display: 'flex',
        flex: 1,
        margin: 10,
        padding: 5,
        width: '80%',
        maxHeight: '100px'
    },
    button: {
        width:'100%',
        alignContent: 'center',
    },
    overlay: {
        position: 'fixed' as const,
        top: 0,
        left: 0, 
        width: '100%', 
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
    projectModal: {
        position: "relative" as const,
        backgroundColor: colors.white,
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
        padding: 20,
        width: "80%",
        height: 'auto',
        maxHeight: '70%',
        overflowY: "auto",
        display: 'flex',
        flexDirection: 'column',
    }
}