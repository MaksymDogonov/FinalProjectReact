import './Article.css'
import {Link, useParams} from "react-router-dom";
import {Box, Card, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useMemo} from "react";

const createElement = (element, isInner = false) => {
    if (element.type === 'code') {
        return <div className="article-content-element"><code>{element.content}</code></div>
    }

    if (element.type === 'group') {
        return <div className="article-content-element"><span>{element.content.map((subElement) => createElement(subElement, true))}</span></div>
    }

    return isInner
        ? <Typography component="span" fontWeight={element.style}>{element.content}</Typography>
        : <div className="article-content-element"><Typography component="span" fontWeight={element.style}>{element.content}</Typography></div>
}

const Article = () => {
    const { articleId } = useParams()
    const records = useSelector((state) => state.articles)
    const article = useMemo(
        () => records.find(article => article.id === Number(articleId)),
        [records, articleId]
    )

    if (!article) {
        return <Typography className="lesson-title" fontSize={25} fontWeight={500}>404 Not Found</Typography>
    }

    return (
        <Box>
            <Box className="article-header">
                <Box component="span" className="article-icon-wrapper">
                    <Box className="article-icon" />
                </Box>
                <Typography fontSize={18} fontWeight={500}>
                    <Link to="/articles">Articles</Link>
                    {' '}
                    /
                    {' '}
                    <Link to={`/articles?category=${article.categories[0]}`}>{article.categories[0]}</Link>
                    {' '}
                    /
                    {' '}
                    {article.title}
                </Typography>
            </Box>
            <Card className="article-content-wrapper">
                {article.content.map((element) => createElement(element))}
            </Card>
        </Box>
    )
}

export default Article
