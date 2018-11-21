import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'


export default class PageTemplate extends Component {
    render() {
        return (
            <Layout>
                <div>
                <h1 className="title" >{this.props.data.page.title}</h1>
                <div 
                    className="content"
                    dangerouslySetInnerHTML={{ __html: this.props.data.page.content }} />
                </div>
            </Layout>
            )
    }
}

PageTemplate.PropTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
}

const Page = ({ data }) => {
    const { wordpressPage: page } = data

    return (
        <Layout>
            <PageTemplate title={page.title} content={page.content} />
        </Layout>
    )
}

Page.PropTypes = {
    data: PropTypes.object.isRequired
}

export default Page

export const query = graphql`
    query currentPage($id: String!) {
        page: wordpressPage(id: { eq: $id }) {
            title
            content
        }
    }
`