import React from 'react';
import {Grid, Typography, Paper, Button, Chip } from "@mui/material";
// import ReactIcon from './icons/react.svg';
// import JavaScriptIcon from './icons/react.svg';
// import AWSIcon from './icons/react.svg';
// import JenkinsIcon from './icons/react.svg';


const Projects = () => {
    const projects = [
        {
            title: 'Kanban',
            description: 'Kanban  + Kanban Server',
            imageUrl: 'https://igorp-io-images.s3.us-west-1.amazonaws.com/Screenshot+2023-09-18+at+12.08.51%E2%80%AFPM.png',
            projectLink: 'https://kanban.igorp.io',
            githubLink: 'https://github.com/igorpsf/kanban',
            technologies: [
                { name: 'React' },
                { name: 'JavaScript' },
                { name: 'AWS' },
                { name: 'Jenkins' },
            ]
        },
        // {
        //     title: 'Project 2',
        //     description: 'Description of Project 2',
        //     imageUrl: 'https://via.placeholder.com/200',
        //
        // },
        // {
        //     title: 'Project 3',
        //     description: 'Description of Project 3',
        //     imageUrl: 'https://via.placeholder.com/200',
        //
        // },
    ];
    return (
        <div>
            <Grid container spacing={3} style={{ padding: '20px' }}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={3} style={{ padding: '20px' }}>
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                style={{ width: '100%' }}
                            />
                            <Typography variant="h6" style={{ marginTop: '10px' }}>
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {project.description}
                            </Typography>
                            <div style={{ marginTop: '10px' }}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    style={{ marginRight: '10px' }}
                                    onClick={() => window.location.href = project.projectLink}
                                >
                                    Project URL
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => window.location.href = project.githubLink}
                                >
                                    GitHub
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Projects;