import React from "react";
import Text from "./commons/Text";

import ProjectDetails from "./ProjectDetails";

type Project = {
    id: number,
    caption: string,
    description: string,
    title: string,
    tech: []
}

type Props = {
    selected: Project[],
}

export default function ProjectList(props: Props) {
    return (
        <>
            {props.selected?.length ? (
                <div>
                    {props.selected.map(p => (
                        <ProjectDetails project={p} key={p.id} />
                        )
                    )}
                </div>
            ) : (
                <div style={styles.caption}>
                    <Text variant="heading">
                        Click a project to see details
                    </Text>
                </div>
            )}
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