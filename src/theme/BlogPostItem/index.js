import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComments from '@site/src/components/GiscusComments';

export default function BlogPostItemWrapper(props) {
    return (
        <>
            <BlogPostItem {...props} />
            <GiscusComments />
        </>
    );
}
