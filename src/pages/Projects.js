import React from 'react';
import {Grid, Typography, Paper, Button } from "@mui/material";


const Projects = () => {

    const projects = [
        {
            title: 'Kanban board',
            description: 'Kanban board  + Kanban Server',
            imageUrl: 'https://igorp-io-images.s3.us-west-1.amazonaws.com/Screenshot+2023-09-18+at+12.08.51%E2%80%AFPM.png',
            projectLink: 'http://kanban.igorp.io',
            githubLink: 'https://github.com/igorpsf/kanban',
            technologies: [
                { name: 'React' },
                { name: 'JavaScript' },
                { name: 'Material UI' },
                { name: '(AWS) - Route53, S3' },
                { name: 'GitHub Actions' },
            ]
        },
        {
            title: 'ChatGPT',
            description: 'ChatGPT-3 with text-davinci-003 model ',
            imageUrl: 'https://igorp-io-images.s3.us-west-1.amazonaws.com/Screenshot+2023-10-12+at+10.52.10%E2%80%AFAM.png',
            projectLink: 'http://gpt.igorp.io',
            githubLink: 'https://github.com/igorpsf/chat-gpt',
            technologies: [
                { name: 'React' },
                { name: 'JavaScript' },
                { name: 'OpenAI API' },
                { name: '(AWS) - Route53, S3' },
                { name: 'GitHub Actions' },
            ]
        },
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
                        <Paper elevation={3} style={{ padding: '20px'}}>
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
                            <div style={{ marginTop: '10px'}}>
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
                                <div style={{ marginTop: '10px', height: '200px'}}>
                                    <Typography variant="body2" color="textSecondary">
                                        Technologies:
                                    </Typography>
                                    <ul>
                                        {project.technologies.map((tech, techIndex) => (
                                            <li key={techIndex}>{tech.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Projects;