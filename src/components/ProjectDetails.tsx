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
}
export default function ProjectDetails({ project }: Props) {
    const unavailable = "Not available yet" ;

    return (
        <>
            <div style={styles.description}>
                <Text variant="title">
                    Project Name: {project?.title || unavailable}
                </Text>
                <Text variant="title">
                    Project Type: {project?.caption || unavailable}
                </Text>
                <Text variant="title">
                    Tech stack: {project?.tech.join(", ") || unavailable}
                </Text>
                <Text variant="title">
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
    }
}