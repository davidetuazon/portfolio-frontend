import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { getProjects } from "../services/api";
import colors from "../constants/colors";
import Text from "../components/commons/Text";
import Button from "../components/commons/Button";

import ProjectList from "../components/ProjectList";
import Joke from "../components/commons/Joke";
import SmallNavigation from "../components/SmallNavigation";

type Project = {
    id: number,
    caption: string,
    description: string,
    title: string,
    tech: []
}


// TODO: MAYBE ADD A SAMPLE OF THE PROJECT WHEN CLICKED. MAKE IT INTERACTIVE INSTEAD OF JUST A LINK.

export default function Projects() {
    const isBigScreen = useMediaQuery({ minWidth: 768 });
    const [projects, setProjects] = useState<Project[]>([]);
    const [selected, setSelected] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await getProjects();
                setProjects(res);
            } catch (e) {
                console.error({ message: "Failed to fetch data", e });
            }
        }
        fetchProjects();
    }, []);


    return (
        <>
            { !isBigScreen &&
                (
                    // <Joke isBigScreen={isBigScreen} />

                    <SmallNavigation 
                        isBigScreen={isBigScreen}
                        projects={projects}
                        selected={selected}
                        setSelected={setSelected}
                    />
                )
            }

            { isBigScreen && 
                (
                <div style={styles.root}>
                    <div style={styles.container}>
                        <div style={styles.navigation}>
                            <div style={styles.header}>
                                {projects?.length > 0 ? (
                                    <Text variant="heading">
                                        Projects
                                    </Text>
                                ) : null }
                            </div>
                            {projects.map(p => (
                                <div key={p.id} style={styles.titles}>
                                    <Button 
                                        style={styles.button} 
                                        title={p.title} 
                                        onButtonPress={() => setSelected(
                                            projects.filter((project) => project.id === p.id)
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={styles.container2}>
                        <div style={styles.content}>
                            <ProjectList isBigScreen={isBigScreen} projects={projects} selected={selected}/>
                        </div>
                    </div>
                </div>
                )
            }
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
    container2: {
        // border: '1px solid blue',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    content: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        minHeight: '300px',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '12px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
    },

    
}