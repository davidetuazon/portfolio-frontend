import React, { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import colors from "../constants/colors";
import Text from "../components/commons/Text";
import Button from "../components/commons/Button";

import ProjectList from "../components/ProjectList";

type Project = {
    id: number,
    caption: string,
    description: string,
    title: string,
    tech: []
}


// TODO: MAYBE ADD A SAMPLE OF THE PROJECT WHEN CLICKED. MAKE IT INTERACTIVE INSTEAD OF JUST A LINK.

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selected, setSelected] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await getProjects();
            setProjects(res);
        }
        fetchProjects();
    }, []);


    return (
        <div style={styles.root}>
            <div style={styles.container}>
                <div style={styles.navigation}>
                    <div style={styles.header}>
                        <Text variant="heading">
                            Projects
                        </Text>
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
                    <ProjectList selected={selected}/>
                </div>
            </div>
        </div>
    );
}

const styles: {[key: string]: React.CSSProperties} = {
    root: {
        background: colors.secondary,
        display: 'flex',
        flexDirection: 'row',
        height: '100dvh',
        flex: 1,
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
        justifyContent: 'center',
    },
    header: {
        // border: '1px solid red',
        color: colors.white,
        position: 'absolute',
        top: 10,
    },
    titles: {
        // border: '1px solid blue',
        justifyItems: 'center',
    },
    button: {
        width:'300px',
        background: colors.primary
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
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '12px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
    },
}