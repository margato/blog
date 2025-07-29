import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComments from '@site/src/components/GiscusComments';
import { useLocation } from '@docusaurus/router';

export default function BlogPostItemWrapper(props) {
    const location = useLocation();
    const isBlogHome = location.pathname === '/blog';

    return (
        <>
            <BlogPostItem {...props} />
            {isBlogHome
                ? <hr style={{
                    marginTop: '-2rem',
                    marginBottom: '2.5rem',
                    opacity: 0.7
                }} />
                : <GiscusComments />
            }
        </>
    )
}
