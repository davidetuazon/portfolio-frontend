import React from "react";
import Text from "./commons/Text";

type Project = {
    id: number,
    caption: string,
    description: string,
    title: string,
    tech: []
}

type Props = {
    project: Project,
    isBigScreen: boolean,
}

export default function ProjectDetails({ project, isBigScreen }: Props) {
    const unavailable = "Not available yet" ;
    const textStyle: React.CSSProperties = {
        fontSize: isBigScreen ? '1.2vw' : '3.2vw'
    }

    return (
        <>
            <div style={styles.description}>
                <Text variant="title" style={textStyle}>
                    Project Name: {project?.title || unavailable}
                </Text>
                <Text variant="title" style={textStyle}>
                    Project Type: {project?.caption || unavailable}
                </Text>
                <Text variant="title" style={textStyle}>
                    Tech stack: {project?.tech.join(", ") || unavailable}
                </Text>
                <Text variant="title" style={textStyle}>
                    Description: {project?.description || unavailable}
                </Text>
            </div>
        </>
    );
}

const styles: {[key: string]: React.CSSProperties} = {
    description: {
        // border: '1px solid red',
    },
    caption: {
        // border: '1px solid red',
    },
}