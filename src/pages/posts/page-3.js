import React from 'react';
 import Layout from '../../components/layout';
import { graphql, StaticQuery, Link } from 'gatsby';

const getImageData = graphql`
    {
        allFile {
            edges {
                node {
                    relativePath
                    size
                    extension
                    birthTime
                }
            }
        }
    }
`

export default () => (
    <Layout>
        <h1>Hello from page 3</h1>
        <h3>Image file data</h3>
        
        <StaticQuery 
            query={getImageData}
            render={data => (
                <table>
                    <thead>
                        <tr>
                            <th>Relative Pth</th>
                            <th>Size of Image</th>
                            <th>Extensions</th>
                            <th>Birthtime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(data)}
                        {data.allFile.edges.map(({ node }, index) => (
                            <tr key={index}>
                                <td>{node.relativePath}</td>
                                <td>{node.size}</td>
                                <td>{node.extension}</td>
                                <td>{node.birthTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        />
        <Link to="/page-2">Go to page 2</Link>
    </Layout>
)