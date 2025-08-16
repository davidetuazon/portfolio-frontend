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
    projects: Project[],
    selected: Project[],
    isBigScreen: boolean,
}

export default function ProjectList(props: Props) {
    return (
        <>
            {props.selected?.length ? (
                <div>
                    {props.selected.map(p => (
                        <ProjectDetails isBigScreen={props.isBigScreen} project={p} key={p.id} />
                        )
                    )}
                </div>
            ) : (
                <div style={styles.caption}>
                    <Text variant="heading">
                        { props?.projects.length ? 
                        "Click a project to see details" : "Fetching data... 🚀 Hold tight!" }
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